import { Injectable } from '@angular/core';
import { deleteObject, getDownloadURL, ref,Storage, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private readonly MAX_IMAGE_SIZE = 400;

  constructor(private storage : Storage) { }

    resize(modelImage: File): Promise<Blob> {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = URL.createObjectURL(modelImage);
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          let width = img.width;
          let height = img.height;
  
          if (width > height) {
            if (width > this.MAX_IMAGE_SIZE) {
              height *= this.MAX_IMAGE_SIZE / width;
              width = this.MAX_IMAGE_SIZE;
            }
          }
          else {
              if(height > this.MAX_IMAGE_SIZE) {
                width *= this.MAX_IMAGE_SIZE / height;
                height = this.MAX_IMAGE_SIZE;
              }
            }
            canvas.width = width;
            canvas.height = height;
            ctx?.drawImage(img, 0, 0, width, height);
            canvas.toBlob(blob => {
              if (blob) {
                resolve(blob);
              } else {
                reject(new Error('Errore durante il ridimensionamento dell\'immagine'));
              }
            }, 'image/webp', 0.8);
          }
        img.onerror = (error) => {
          reject(error);
        }
      });
  
    }

    public upload(image: Blob, fileName: string, folder: string): Promise<string> {
      return new Promise((resolve, reject) => {
        const storageRef = ref(this.storage, `${folder}/${fileName}`);
        uploadBytes(storageRef, image).then(snapshot => {
          getDownloadURL(snapshot.ref).then(url => {
            resolve(url);
          }).catch(error => {
            reject(error);
          });
        });
      });
    }

    public delete(imageUrl: string): Promise<void> {
      const imageRef = ref(this.storage, imageUrl);
      return deleteObject(imageRef);
    }
}
