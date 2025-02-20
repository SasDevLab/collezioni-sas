import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { FormsModule } from '@angular/forms';
import { LegoListComponent } from './components/lego/lego-list/lego-list.component';
import { BuragoListComponent } from './components/burago/burago-list/burago-list.component';
import { CollectionFormComponent } from './components/collection-form/collection-form.component';
import { LegoFormComponent } from './components/lego/lego-form/lego-form.component';
import { BuragoFormComponent } from './components/burago/burago-form/burago-form.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    CollectionListComponent,
    LegoListComponent,
    BuragoListComponent,
    CollectionFormComponent,
    LegoFormComponent,
    BuragoFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
