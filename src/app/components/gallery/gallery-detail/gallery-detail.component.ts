import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionsService } from '../../../services/repository/modellini.service';
import { CollectionItem } from 'src/app/Models/CollectionItem';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.css']
})
export class GalleryDetailComponent  {
  @Input() modellino: CollectionItem | undefined;
}