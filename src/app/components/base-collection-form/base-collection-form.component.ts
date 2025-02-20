import { Component, Input } from '@angular/core';
import { CollectionItem } from 'src/app/Models/CollectionItem';
import { CollectionsService } from 'src/app/services/repository/modellini.service';

@Component({
  selector: 'app-base-collection-form',
  templateUrl: './base-collection-form.component.html',
  styleUrls: ['./base-collection-form.component.css']
})
export class BaseCollectionFormComponent {
  
  private _dataService: CollectionsService<CollectionItem> | undefined;
  @Input() returnRouting : string = '';
  @Input() collectionItem!: CollectionItem ;
  @Input() detailRouting: string = '';
  @Input() modelName: string = '';

  @Input()
  set dataService(service: CollectionsService<CollectionItem> | undefined) {
    this._dataService = service;
  }

  get dataService(): CollectionsService<CollectionItem> {
    if (!this._dataService) {
      throw new Error('Data service non fornito!');
    }
    return this._dataService;
  }
}
