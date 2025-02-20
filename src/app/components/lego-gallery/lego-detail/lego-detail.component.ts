import { Component, Input } from '@angular/core';
import { LegoModel } from 'src/app/Models/LegoModel';

@Component({
  selector: 'app-lego-detail',
  templateUrl: './lego-detail.component.html',
  styleUrls: ['./lego-detail.component.css']
})
export class LegoDetailComponent {
  @Input() data: LegoModel | undefined;
}
