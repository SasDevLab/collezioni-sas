import { Component } from '@angular/core';
import { LegoService } from 'src/app/services/repository/lego.service';

@Component({
  selector: 'app-lego-list',
  templateUrl: './lego-list.component.html',
  styleUrls: ['./lego-list.component.css']
})
export class LegoListComponent {

  constructor(public legoService : LegoService) { } 
}
