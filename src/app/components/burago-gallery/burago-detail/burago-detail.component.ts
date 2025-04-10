import { Component, Input } from '@angular/core';
import { BuragoModel } from 'src/app/Models/BuragoModel';

@Component({
  selector: 'app-burago-detail',
  templateUrl: './burago-detail.component.html',
  styleUrl: './burago-detail.component.css'
})
export class BuragoDetailComponent {
  @Input() data: BuragoModel | undefined;
}
