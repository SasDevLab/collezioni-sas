import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseCollectionFormComponent } from 'src/app/components/base-collection-form/base-collection-form.component';
import { CollectionItem } from 'src/app/Models/CollectionItem';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent extends BaseCollectionFormComponent implements OnInit {
  modellini$ : Observable<CollectionItem[]> | undefined;
  errorMessage: string | null = null;
   
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.modellini$ = this.dataService.getAll();
  }

  deleteModellino(id: string  | undefined): void {
    if (id) {
      const confirmDelete = confirm('Sei sicuro di voler cancellare questo modellino?');
      if(confirmDelete) {
        this.delete(id)
      }
    }
  }

  private delete(id: string): void {
    this.dataService.delete(id).then(() => {
      this.modellini$ = this.dataService.getAll();
      this.errorMessage = null; // Resetta il messaggio di errore
    }).catch((error: { message: string; }) => {
      console.error('Errore durante la cancellazione del modellino:', error);
      this.errorMessage = 'Si è verificato un errore durante la cancellazione del modellino: ' + error.message;
    });
  }


}
