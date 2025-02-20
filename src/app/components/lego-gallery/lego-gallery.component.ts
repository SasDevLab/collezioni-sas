import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LegoModel } from 'src/app/Models/LegoModel';
import { LegoService } from 'src/app/services/repository/lego.service';

@Component({
  selector: 'app-lego-gallery',
  templateUrl: './lego-gallery.component.html',
  styleUrls: ['./lego-gallery.component.css']
})
export class LegoGalleryComponent {

  constructor(public modelliniService: LegoService) {}
}
