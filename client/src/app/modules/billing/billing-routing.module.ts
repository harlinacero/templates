import { Routes, RouterModule } from '@angular/router';
import { BillingComponent } from './billing.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path: '',
    component: BillingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
