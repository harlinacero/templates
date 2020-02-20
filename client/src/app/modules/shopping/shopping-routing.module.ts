import { Routes, RouterModule } from '@angular/router';
import { ShoppingComponent } from './shopping.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ShoppingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
