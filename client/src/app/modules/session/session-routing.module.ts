import { RestorePasswordComponent } from './restore-password/restore-password.component';
import { SendPasswordComponent } from './send-password/send-password.component';
import { Routes, RouterModule } from '@angular/router';
import { SessionComponent } from './session.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: SessionComponent
  },
  {
    path: 'send-password',
    component: SendPasswordComponent
  },
  {
    path:'restore-password',
    component: RestorePasswordComponent
  }
];

// SessionComponent, SendPasswordComponent, RestorePasswordComponent
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SessionRoutingModule {}
