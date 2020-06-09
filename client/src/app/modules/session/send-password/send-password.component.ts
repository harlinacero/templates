import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sessionervice } from '../session.service';

@Component({
  selector: 'app-send-password',
  templateUrl: './send-password.component.html',
  styleUrls: ['./send-password.component.scss']
})
export class SendPasswordComponent implements OnInit {
  email: string;

  constructor(private router: Router, private sessionService: Sessionervice) { }

  ngOnInit() {
  }

  sendCode(email, event: Event) {
    event.preventDefault();
    this.sessionService.sendEmail(email)
      .subscribe(res => {
        if (res.isSuccesfull) {
          alert('Un código de confirmación ha sido enviado al correo ' + email);
          this.router.navigate(['login', 'restore-password']);
        } else {
          alert('El código no pudo ser enviado al correo electrónico ' + email);
        }
      });
  }

  return() {
    this.router.navigate(['login']);
  }

}
