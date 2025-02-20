import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { firebaseConfig } from '../environements/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './components/home/home.component'
import { AppRoutingModule } from './app-routing.module';
import { LegoGalleryComponent } from './components/lego-gallery/lego-gallery.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryDetailComponent } from './components/gallery/gallery-detail/gallery-detail.component';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { BaseCollectionFormComponent } from './components/base-collection-form/base-collection-form.component';
import { ChildModelCollectionFormComponent } from './components/child-model-collection-form/child-model-collection-form.component';
import { LegoDetailComponent } from './components/lego-gallery/lego-detail/lego-detail.component';
import { BuragoGalleryComponent } from './components/burago-gallery/burago-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LegoGalleryComponent,
    GalleryComponent,
    GalleryDetailComponent,
    BaseCollectionFormComponent,
    ChildModelCollectionFormComponent,
    LegoDetailComponent,
    BuragoGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage( () => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
