import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sessionervice } from './session.service';
import { SessionComponent } from './session.component';
import { SessionRoutingModule } from './session-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [SessionComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SessionRoutingModule
  ],
  providers: [
    HttpClientModule,
    Sessionervice
  ]
})
export class SessionModule { }
