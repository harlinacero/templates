import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }, {
    path: 'roles',
    component: RolesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
