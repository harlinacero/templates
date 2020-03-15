import { SharedModule } from './../../shared/shared.module';
import { BillingRoutingModule } from './billing-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing.component';
import { PupupBillingComponent } from './pupup-billing/pupup-billing.component';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DetailbillingComponent } from './detailbilling/detailbilling.component';



@NgModule({
  declarations: [
    BillingComponent,
    PupupBillingComponent,
    DetailbillingComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule,
    SharedModule
  ], entryComponents: [
    PupupBillingComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: { float: 'always' } }
  ]
})
export class BillingModule { }
