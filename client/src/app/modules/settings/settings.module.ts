import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material';

import { CompanyComponent } from './company/company.component';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { PopupCompanyComponent } from './company/popup-company/popup-company.component';
import { PopupAprovalMatrixComponent } from './cost-center/popup-aproval-matrix/popup-aproval-matrix.component';
import { PopupCostCenterComponent } from './cost-center/popup-cost-center/popup-cost-center.component';
import { CostCenterComponent } from './cost-center/cost-center.component';



@NgModule({
  declarations: [
    CompanyComponent,
    SettingsComponent,
    PopupCompanyComponent,
    PopupAprovalMatrixComponent,
    CostCenterComponent,
    PopupCostCenterComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ],
  entryComponents: [
    PopupCompanyComponent,
    PopupAprovalMatrixComponent,
    PopupCostCenterComponent
  ], providers: [
    { provide: MAT_DIALOG_DATA, useValue: { float: 'always' } }
  ]
})
export class SettingsModule { }
