import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BuragoModel } from 'src/app/Models/BuragoModel';
import { BuragoService } from 'src/app/services/repository/burago.service';

@Component({
  selector: 'app-burago-gallery',
  templateUrl: './burago-gallery.component.html',
  styleUrls: ['./burago-gallery.component.css']
})
export class BuragoGalleryComponent {

  constructor(public modelliniService: BuragoService) {}
}
