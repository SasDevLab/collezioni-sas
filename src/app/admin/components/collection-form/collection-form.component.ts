import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseCollectionFormComponent } from 'src/app/components/base-collection-form/base-collection-form.component';
import { CollectionItem } from 'src/app/Models/CollectionItem';
import { CollectionsService } from 'src/app/services/repository/modellini.service';

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.css']
})
export class CollectionFormComponent extends BaseCollectionFormComponent implements OnInit {
  isEditMode: boolean = false;
  errorMessage: string | null = null;
  selectedFile: File | null = null;

  @Output() collectionItemChanged = new EventEmitter<CollectionItem>();

  constructor(  private route: ActivatedRoute, private router: Router) { super(); }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.dataService.getById(id).subscribe({
        next: (item) => {
          if (item) {
            this.collectionItem = item;
            this.collectionItemChanged.emit(this.collectionItem);
          }
        },
        error: (error) => this.manageError(error)
      });
    }
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.update();
    } else {
      this.add();
    }
  }

  onCancel(): void {
    this.router.navigate([this.returnRouting]);
  }

  private add(): void {
    this.dataService.add(this.collectionItem, this.selectedFile).then(this.returnBack.bind(this))
    .catch(error => this.manageError(error));
  }

  private update(): void {
    this.dataService.update(this.collectionItem, this.selectedFile).then(this.returnBack.bind(this))
    .catch(error => this.manageError(error));
  }

  private manageError(error: any): void {
    console.error('Errore durante l\'aggiornamento del modellino:', error);
    this.errorMessage = 'Si è verificato un errore durante l\'aggiornamento del modellino: ' + error.message;
  }

  private returnBack(): void {
    this.router.navigate([this.returnRouting]); // Naviga alla lista dei modellini dopo l'aggiornamento
    this.errorMessage = null; // Resetta il messaggio di errore
  }

}
