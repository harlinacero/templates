import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { PopupCompanyComponent } from './popup-company/popup-company.component';



@NgModule({
  declarations: [
    SettingsComponent,
    PopupCompanyComponent
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
