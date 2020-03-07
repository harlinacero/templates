import { Injectable } from '@angular/core';
import { Urls } from '../interfaces/urls';
import { HttpClient } from '@angular/common/http';
import { ServiceBase } from './service.base';
import { Billing } from '../interfaces/billing.interface';
import { RequestResult } from '../interfaces/requestResult.interface';
import { Status } from '../interfaces/status.interface';

@Injectable({
  providedIn: 'root',
})
export class BillingService {
  urls: Urls;

  constructor(private http: HttpClient, private serviceBase: ServiceBase) {
    this.urls = JSON.parse(localStorage.getItem('urls'));
    if (this.urls === undefined) {
      this.serviceBase.validateSession();
    }
  }


  GetAllBilling() {
    return this.http.get<RequestResult<Billing[]>>(`${this.urls.urlbase}AprovaMatrix/GetAllBilling`);
  }

  SaveBilling(levelsAproval: Billing) {
    return this.http.post<RequestResult<Billing>>(`${this.urls.urlbase}AprovaMatrix/SaveBilling`, levelsAproval);
  }

  GetAllStates() {
    return this.http.get<RequestResult<Status[]>>(`${this.urls.urlbase}AprovaMatrix/GetAllBilling`);
  }

}
