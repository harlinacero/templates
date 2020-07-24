import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Session } from './../interfaces/session.interface';
import { URLS, SESSION } from '../globals/localStorage.const';

@Injectable({
  providedIn: 'root',
})
export class ServiceBase {


  get urls(): any {
    const data = localStorage.getItem(URLS);
    if (data && data !== '') {
      return JSON.parse(data);
    }
    return this.getUrls();
  }

  get session(): Session {
    const data = localStorage.getItem(SESSION);
    if (data && data !== '') {
      return JSON.parse(data);
    }
    return this.validateSession();
  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private http: HttpClient, private router: Router) {
    this.getUrls();
  }

  async getUrls() {
    const config = await this.http.get('./assets/config/urls.json').toPromise();
    localStorage.setItem(URLS, JSON.stringify(config));
    return config;
  }

  validateSession(menu: string = null) {
    const session = localStorage.getItem(SESSION);
    if (!session) {
      this.router.navigate(['login']);
    } else {
      const newSession = JSON.parse(session);
      if (!this.session.menus.find(me => me.component === menu)) {
        this.router.navigate([this.session.menus[0].component]);
      }
      return newSession;
    }
  }
}
