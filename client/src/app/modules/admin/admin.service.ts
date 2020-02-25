import { Urls } from './../../shared/interfaces/urls';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ServiceBase } from 'src/app/shared/services/service.base';

import { RequestResult } from 'src/app/shared/interfaces/requestResult.interface';
import { Person, DocumentType } from './../../shared/interfaces/person';
import { Role } from 'src/app/shared/interfaces/role';
import { Providers } from 'src/app/shared/interfaces/providers.interface';



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

  getDocumentTypes() {
    return this.http.get<RequestResult<DocumentType[]>>(`${this.urls.urlbase}Admin/GetDocumentTypes`);
  }


  getAllProviders() {
    return this.http.get<RequestResult<Providers[]>>(`${this.urls.urlbase}Provider/GetAllProviders`);
  }

  saveProvider(provider: Providers) {
    return this.http.post<RequestResult<Providers>>(`${this.urls.urlbase}Provider/SaveProvider`, provider);
  }

  getProvider(id: string) {
    return this.http.get<RequestResult<Providers>>(`${this.urls.urlbase}Provider/GetProvider?id=${id}`);
  }
}
