import { Injectable } from '@angular/core';
import { Urls } from 'src/app/shared/interfaces/urls';
import { HttpClient } from '@angular/common/http';
import { ServiceBase } from 'src/app/shared/services/service.base';
import { Company } from 'src/app/shared/interfaces/company.interface';
import { RequestResult } from 'src/app/shared/interfaces/requestResult.interface';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  urls: Urls;

  constructor(private http: HttpClient, private serviceBase: ServiceBase) {
    this.urls = JSON.parse(localStorage.getItem('urls'));
    if (this.urls === undefined) {
      this.serviceBase.validateSession();
    }
  }
  saveCompany(company: Company) {
    return this.http.post<RequestResult<Company>>(`${this.urls.urlbase}Company/SaveCompany`, company);
  }

  getCompany() {
    return this.http.get<RequestResult<Company>>(`${this.urls.urlbase}Company/GetCompany`);
  }

}
