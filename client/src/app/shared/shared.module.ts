import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';

import { TablesComponent } from './components/tables/tables.component';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './material/material.module';

import { ServiceBase } from './services/service.base';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArraySortPipe } from './pipes/arraySort.pipe';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    TablesComponent,
    ModalComponent,
    ArraySortPipe,
    AlertComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ArraySortPipe,
    FormsModule,
    LayoutModule,
    MaterialModule,
    TablesComponent,
    ReactiveFormsModule,
    RouterModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [
    ServiceBase
  ]
})
export class SharedModule { }
