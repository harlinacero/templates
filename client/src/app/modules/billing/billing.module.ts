import { SharedModule } from './../../shared/shared.module';
import { BillingRoutingModule } from './billing-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing.component';



@NgModule({
  declarations: [
    BillingComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule,
    SharedModule
  ]
})
export class BillingModule { }
