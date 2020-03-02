import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { PopupCompanyComponent } from './company/popup-company/popup-company.component';
import { AprovalMatrixComponent } from './aproval-matrix/aproval-matrix.component';
import { PopupAprovalMatrixComponent } from './aproval-matrix/popup-aproval-matrix/popup-aproval-matrix.component';
import { MAT_DIALOG_DATA } from '@angular/material';



@NgModule({
  declarations: [
    CompanyComponent,
    SettingsComponent,
    PopupCompanyComponent,
    AprovalMatrixComponent,
    PopupAprovalMatrixComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ],
  entryComponents: [
    PopupCompanyComponent,
    PopupAprovalMatrixComponent
  ], providers: [
    { provide: MAT_DIALOG_DATA, useValue: { float: 'always' } }
  ]
})
export class SettingsModule { }
