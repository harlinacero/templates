import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Session } from './../interfaces/session.interface';
import { URLS, SESSION } from '../globals/localStorage.const';

@Injectable({
  providedIn: 'root',
})
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

  validateSession(menu: string = null) {
    const session = localStorage.getItem(SESSION);
    if (!session) {
      this.router.navigate(['login']);
    } else {
      this.session = JSON.parse(session);
      if(!this.session.menus.find(me => me.component === menu)) {
        this.router.navigate(['/']);
      }

    }
  }
}
