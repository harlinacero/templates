import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { PopupComponent } from './roles/popup/popup.component';



@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    RolesComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  entryComponents: [
    PopupComponent
  ]
})
export class AdminModule { }
