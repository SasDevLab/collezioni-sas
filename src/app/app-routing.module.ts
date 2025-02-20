import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LegoGalleryComponent } from './components/lego-gallery/lego-gallery.component';
import { GalleryDetailComponent } from './components/gallery/gallery-detail/gallery-detail.component';
import { BuragoGalleryComponent } from './components/burago-gallery/burago-gallery.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'galleria-lego', component: LegoGalleryComponent },
  { path: 'galleria-burago', component: BuragoGalleryComponent },
  { path: 'lego/:id', component: GalleryDetailComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
