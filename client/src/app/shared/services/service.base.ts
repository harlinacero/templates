import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Session } from './../interfaces/session.interface';
import { URLS, SESSION } from '../globals/localStorage.const';

@Injectable()
export class ServiceBase {
  urls: any;
  session: Session;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private http: HttpClient, private router: Router) {
    this.getUrls();
  }

  getUrls() {
    this.http.get('./assets/config/urls.json').subscribe(res => {
      this.urls = res;
      localStorage.setItem(URLS, JSON.stringify(this.urls));
    });
  }

  validateSession() {
    const session = localStorage.getItem(SESSION);
    if (!(!!session)) {
      this.router.navigate(['login']);
    } else {
      this.session = JSON.parse(session);
    }
  }
}
