import { Inject, Injectable } from '@angular/core';
import { Firestore, collection, addDoc, doc, deleteDoc, CollectionReference, DocumentData, getDocs, getDoc, updateDoc  } from '@angular/fire/firestore';
import { Storage } from '@angular/fire/storage';
import { from, Observable } from 'rxjs';
import { CollectionItem } from '../../Models/CollectionItem';
import { DocumentReference } from 'firebase/firestore';
import { ImagesService } from '../images.service';

@Injectable({
  providedIn: 'root'
})
export abstract class CollectionsService<TCollection extends CollectionItem> {
  private readonly MAX_IMAGE_SIZE = 400;
  private collectionRef: CollectionReference<DocumentData> ;

  constructor(private firestore: Firestore, private imageService : ImagesService, @Inject('collectionName') private collectionName: string) { 
    this.collectionRef = collection(firestore, this.collectionName);
  }

  getAll(): Observable<TCollection[]> {
    return from(getDocs(this.collectionRef).then(data => data.docs.map(doc => ({ id: doc.id, ...doc.data() as TCollection }))));
  }

  async add(modellino: TCollection, modelImage: File | null ): Promise<void> {
    if(modelImage) {
      const url = await this.manageImageUpload(modelImage);
      modellino.imageUrl = url;
    }

    return await this.insertInFirebase(modellino);
  }

  private insertInFirebase(modellino: TCollection): Promise<void> {
    delete modellino.id;
    return addDoc(this.collectionRef, modellino) as unknown as Promise<void>;
  }

  async manageImageUpload(modelImage: File): Promise<string> {
    const resizedImage = await this.imageService.resize(modelImage)
    const imageUrl = await this.imageService.upload(resizedImage, modelImage.name, this.collectionName);
    return imageUrl;
  }

  async delete(id: string): Promise<void> {
    const modellinoDoc = doc(this.firestore, `${this.collectionName}/${id}`);
    this.getImgUrl(modellinoDoc).then(url => this.imageService.delete(url));
    return deleteDoc(modellinoDoc);
  }

  private async getImgUrl(modellinoDoc: DocumentReference): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const modellino = await getDoc(modellinoDoc)
        if(modellino.exists()){
          const url = modellino.data()['imageUrl'];
        resolve(url);
        }
        throw new Error('Modellino non trovato');
      } catch (error) {
        reject(error);
      }
    });
  }

  private async deleteImage(modellinoDoc: DocumentReference): Promise<void> {
    const modellino = await getDoc(modellinoDoc)
    if(modellino.exists()){
      const imageUrl = modellino.data()['imageUrl'];
      if(imageUrl){
        return this.imageService.delete(imageUrl);
      }
    }
    throw new Error('Modellino non trovato');
  }

  async update(model: TCollection, image? : File | null): Promise<void> {
    const modellinoDoc = doc(this.firestore, `${this.collectionName}/${model.id}`);
    if(image){
      this.deleteImage(modellinoDoc);
      await this.manageImageUpload(image).then(url => model.imageUrl = url);
    }
      return updateDoc(modellinoDoc, { ...model as unknown as { [x: string]: any } });
  }

  getById(id: string): Observable<TCollection | undefined> {
    const modellinoDoc = doc(this.firestore, `${this.collectionName}/${id}`);
    return from(getDoc(modellinoDoc).then(doc => {
      if (doc.exists()) {
        return { id: doc.id, ...doc.data() } as TCollection;
      } else {
        return undefined;
      }
    }));
      
  }
}

