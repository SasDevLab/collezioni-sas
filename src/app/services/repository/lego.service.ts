import { Injectable } from '@angular/core';
import { LegoModel } from 'src/app/Models/LegoModel';
import { Firestore } from '@angular/fire/firestore';
import { ImagesService } from '../images.service';
import { CollectionsService } from './modellini.service';

@Injectable({
  providedIn: 'root'
})
export class LegoService extends CollectionsService<LegoModel> {
  constructor(firestore: Firestore, imageService: ImagesService) {
    super(firestore, imageService, 'lego');
  }
}