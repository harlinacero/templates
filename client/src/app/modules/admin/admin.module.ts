import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { PopupComponent } from './roles/popup/popup.component';
import { PopupUsersComponent } from './users/popup-users/popup-users.component';
import { MAT_DIALOG_DATA, MatCheckboxModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { ProvidersComponent } from './providers/providers.component';
import { PopupProviderComponent } from './providers/popup-provider/popup-provider.component';
import { ProductsComponent } from './products/products.component';
import { PopupProductsComponent } from './products/popup-products/popup-products.component';


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    RolesComponent,
    PopupComponent,
    PopupUsersComponent,
    ProvidersComponent,
    PopupProviderComponent,
    ProductsComponent,
    PopupProductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCheckboxModule,
    SharedModule
  ],
  entryComponents: [
    PopupComponent,
    PopupUsersComponent,
    PopupProviderComponent,
    PopupProductsComponent
  ], providers: [
    { provide: MAT_DIALOG_DATA, useValue: { float: 'always' } },
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ]
})
export class AdminModule { }
