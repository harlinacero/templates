import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sessionervice } from '../session.service';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.scss']
})
export class RestorePasswordComponent implements OnInit {
  password: string = '';
  password2: string = '';


  constructor(private router: Router, private sessionService: Sessionervice) { }

  ngOnInit() {
  }

  restorePassword(code: string, password: string, password2: string) {
    if (password === password2) {
      this.sendNewPassword(code, password);
    } else {
      alert('Las contraseñas no coinciden');
    }

  }
  sendNewPassword(code: string, password: string) {
    this.sessionService.restorePassword(btoa(code), btoa(password))
      .subscribe(res => {
        if (res.isSuccesfull) {
          alert(res.result);
          this.router.navigate(['login']);
        } else {
          alert(res.message);
        }
      });
  }

  return() {
    this.router.navigate(['login']);
  }

}
