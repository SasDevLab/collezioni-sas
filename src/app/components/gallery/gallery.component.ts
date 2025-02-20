import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { CollectionItem } from 'src/app/Models/CollectionItem';
import { BaseCollectionFormComponent } from '../base-collection-form/base-collection-form.component';
import { forkJoin, from, map, Observable, switchMap } from 'rxjs';
import { ImageCacheService } from 'src/app/services/image-cache.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent extends BaseCollectionFormComponent implements OnInit {
 
  @Input() contentTemplate: TemplateRef<any> | null = null;
  selectedModellino: CollectionItem | undefined;

  modellini$ : Observable<CollectionItem[]> | undefined;
  
  constructor(private imageCacheService: ImageCacheService) {
    super();
  }


  ngOnInit(): void {
    this.modellini$ = this.dataService.getAll().pipe(
      switchMap((modellini) => {
        const cachedImages$ = modellini.map(modellino => 
          from(this.imageCacheService.cacheImage(modellino.imageUrl)).pipe(
            map(cachedImageUrl => {
              modellino.imageUrl = cachedImageUrl;
              return modellino;
            })
          )
        );
        return forkJoin(cachedImages$);
      })
    );
  }

  openModal(modellino: CollectionItem): void {
    this.selectedModellino = modellino;
    const modalElement = document.getElementById('galleryDetailModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}