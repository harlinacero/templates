import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { PopupCompanyComponent } from './popup-company/popup-company.component';
import { AprovalMatrixComponent } from './aproval-matrix/aproval-matrix.component';



@NgModule({
  declarations: [
    SettingsComponent,
    PopupCompanyComponent,
    AprovalMatrixComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ],
  entryComponents: [
    PopupCompanyComponent
  ]
})
export class SettingsModule { }
