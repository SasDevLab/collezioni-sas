import { Component } from '@angular/core';
import { BuragoService } from 'src/app/services/repository/burago.service';

@Component({
  selector: 'app-burago-list',
  templateUrl: './burago-list.component.html',
  styleUrls: ['./burago-list.component.css']
})
export class BuragoListComponent {

  constructor(public buragoService : BuragoService) { }
}
