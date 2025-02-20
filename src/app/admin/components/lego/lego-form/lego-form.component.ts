import { Component } from '@angular/core';
import { ChildModelCollectionFormComponent } from 'src/app/components/child-model-collection-form/child-model-collection-form.component';
import { LegoModel } from 'src/app/Models/LegoModel';
import { LegoService } from 'src/app/services/repository/lego.service';

@Component({
  selector: 'app-lego-form',
  templateUrl: './lego-form.component.html',
  styleUrls: ['./lego-form.component.css']
})
export class LegoFormComponent extends ChildModelCollectionFormComponent<LegoModel> {

  constructor(public legoService: LegoService) {
    super();
  }

}
