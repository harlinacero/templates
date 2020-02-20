import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class ServiceBase {
  urls: any;
  // http: HttpClient;

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
      localStorage.setItem('urls', JSON.stringify(this.urls));
    });
  }

  validateSession() {
    const session = localStorage.getItem('session');
    if (!(!!session)) {
      this.router.navigate(['login']);
    }
  }
}
