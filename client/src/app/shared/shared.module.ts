import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';

import { TablesComponent } from './components/tables/tables.component';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './material/material.module';

import { ServiceBase } from './services/service.base';

@NgModule({
  declarations: [TablesComponent],
  imports: [
    AngularFontAwesomeModule,
    CommonModule,
    HttpClientModule,
    LayoutModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    LayoutModule,
    MaterialModule,
    TablesComponent
  ],
  providers: [
    ServiceBase
  ]
})
export class SharedModule { }
