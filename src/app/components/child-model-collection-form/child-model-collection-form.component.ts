import { Component } from '@angular/core';
import { CollectionItem } from 'src/app/Models/CollectionItem';

@Component({
  selector: 'app-child-model-collection-form',
  templateUrl: './child-model-collection-form.component.html',
  styleUrls: ['./child-model-collection-form.component.css']
})
export class ChildModelCollectionFormComponent<T extends CollectionItem> {
  modelItem: T = CollectionItem.Empty() as T;;

  onCollectionItemChange(event: any): void {
    this.modelItem = event;
  }
}
