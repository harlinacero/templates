import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { PopupComponent } from './roles/popup/popup.component';
import { PopupUsersComponent } from './users/popup-users/popup-users.component';



@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    RolesComponent,
    PopupComponent,
    PopupUsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  entryComponents: [
    PopupComponent,
    PopupUsersComponent
  ]
})
export class AdminModule { }