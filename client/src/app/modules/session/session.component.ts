import { AlertComponent } from './../../shared/components/alert/alert.component';
import { ServiceBase } from 'src/app/shared/services/service.base';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sessionervice } from './session.service';
import { AccountInterface } from 'src/app/shared/interfaces/services.interface';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  userName: string;
  password: string;
  intentos = 3;
  session: string;

  constructor(private router: Router, private sessionService: Sessionervice) {
  //  this.loadImage();
  }

  ngOnInit() {
    this.session = localStorage.getItem('session');
    if (!!this.session) {
      this.router.navigate(['home']);
    }
  }

  logIn(username: string, password: string, event: Event) {
    event.preventDefault();
    this.sessionService.login(username, btoa(password))
      .subscribe(res => {
        if (res.isSuccesfull) {
          localStorage.setItem('session', JSON.stringify(res.result));
          // location.reload();
          this.router.navigateByUrl('home');
        } else {
          this.intentos = this.intentos - 1;
          localStorage.clear();
          alert(res.message);
          this.router.navigateByUrl('login');
        }
      });
  }

  // loadImage() {
  //   const a = document.getElementById('loginpage');
  //   a.style.backgroundImage = 'url("./assets/images/loginImage.jpg")';
  //   a.style.backgroundPosition = 'center';
  //   a.style.backgroundRepeat = 'no-repeat';
  //   a.style.backgroundSize = 'cover';
  //   a.style.height = '100vh';
  //   a.style.background = '0.5';
  // }

}



