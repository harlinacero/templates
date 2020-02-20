import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { SharedModule } from './../../shared/shared.module';



@NgModule({
  declarations: [
    ShoppingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
