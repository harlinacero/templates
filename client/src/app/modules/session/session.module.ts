import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sessionervice } from './session.service';
import { SessionComponent } from './session.component';
import { SessionRoutingModule } from './session-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SendPasswordComponent } from './send-password/send-password.component';
import { RestorePasswordComponent } from './restore-password/restore-password.component';



@NgModule({
  declarations: [SessionComponent, SendPasswordComponent, RestorePasswordComponent],
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
