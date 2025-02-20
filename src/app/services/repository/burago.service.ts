import { Injectable } from '@angular/core';
import { CollectionsService } from './modellini.service';
import { BuragoModel } from 'src/app/Models/BuragoModel';
import { ImagesService } from '../images.service';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BuragoService extends CollectionsService<BuragoModel> {

  constructor(firestore: Firestore, imageService: ImagesService) {
    super(firestore, imageService, 'burago');
  }
}
