import { Urls } from './../../shared/interfaces/urls';
import { Person } from './../../shared/interfaces/person';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ServiceBase } from 'src/app/shared/services/service.base';

import { RequestResult } from 'src/app/shared/interfaces/requestResult.interface';
import { Role } from 'src/app/shared/interfaces/role';



@Injectable({
  providedIn: 'root',
})
export class AdminService {
  urls: Urls;

  constructor(private http: HttpClient, private serviceBase: ServiceBase) {
    this.urls = JSON.parse(localStorage.getItem('urls'));
    if (this.urls === undefined) {
      this.serviceBase.validateSession();
    }
  }

  getAllUsers() {
    return this.http.get<RequestResult<Person[]>>(`${this.urls.urlbase}Admin/GetAllPerson`);
  }

  saveUser(person: Person) {
    return this.http.post<RequestResult<Person>>(`${this.urls.urlbase}Admin/SavePerson`, person);
  }

  getUser(id: string) {
    return this.http.get<RequestResult<Person>>(`${this.urls.urlbase}Admin/SavePerson?id=${id}`);
  }

  getAllRoles() {
    return this.http.get<RequestResult<Role[]>>(`${this.urls.urlbase}Admin/GetAllRole`);
  }

  saveRole(role: Role) {
    return this.http.post<RequestResult<Role>>(`${this.urls.urlbase}Admin/SaveRole`, role);
  }

  getRole(id: string) {
    return this.http.get<RequestResult<Role>>(`${this.urls.urlbase}Admin/GetRoles?id=${id}`);
  }

}
