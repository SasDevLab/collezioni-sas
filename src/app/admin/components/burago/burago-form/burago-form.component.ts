import { Component } from '@angular/core';
import { ChildModelCollectionFormComponent } from 'src/app/components/child-model-collection-form/child-model-collection-form.component';
import { BuragoModel } from 'src/app/Models/BuragoModel';
import { BuragoService } from 'src/app/services/repository/burago.service';

@Component({
  selector: 'app-burago-form',
  templateUrl: './burago-form.component.html',
  styleUrls: ['./burago-form.component.css']
})
export class BuragoFormComponent extends ChildModelCollectionFormComponent<BuragoModel> {

  constructor(public buragoService: BuragoService) {
    super();
  }

}
