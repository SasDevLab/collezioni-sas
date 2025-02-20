import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './admin-auth.guard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LegoListComponent } from './components/lego/lego-list/lego-list.component';
import { BuragoListComponent } from './components/burago/burago-list/burago-list.component';
import { LegoFormComponent } from './components/lego/lego-form/lego-form.component';
import { BuragoFormComponent } from './components/burago/burago-form/burago-form.component';

const routes: Routes = [
  { path: 'burago-list', component: BuragoListComponent, canActivate : [AdminAuthGuard] },
  { path: 'burago-detail', component: BuragoFormComponent, canActivate : [AdminAuthGuard] },
  { path: 'burago-detail/:id', component: BuragoFormComponent, canActivate : [AdminAuthGuard] },

  { path: 'lego-list', component: LegoListComponent, canActivate : [AdminAuthGuard] },
  { path: 'lego-detail', component: LegoFormComponent, canActivate : [AdminAuthGuard] },
  { path: 'lego-detail/:id', component: LegoFormComponent, canActivate : [AdminAuthGuard] },

  { path: '', component: AdminDashboardComponent, canActivate : [AdminAuthGuard] },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
