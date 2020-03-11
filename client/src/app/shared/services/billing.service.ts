import { Injectable } from '@angular/core';
import { Urls } from '../interfaces/urls';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ServiceBase } from './service.base';
import { Billing } from '../interfaces/billing.interface';
import { RequestResult } from '../interfaces/requestResult.interface';
import { Status } from '../interfaces/status.interface';
import { TypeBilling } from '../interfaces/typeBilling.interface';

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
    return this.http.get<RequestResult<Billing[]>>(`${this.urls.urlbase}Billing/GetAllBilling`);
  }

  // SaveBilling(levelsAproval: Billing) {
  //   return this.http.post<RequestResult<Billing>>(`${this.urls.urlbase}Billing/SaveBilling`, levelsAproval);
  // }



  SaveBilling(billing: Billing, file: File) {

    let formData = new FormData()
    formData.set('uploadFile', file, file.name);
    let params = new HttpParams()
      .set('billing', JSON.stringify(billing))

    return this.http.post<RequestResult<Billing>>(`${this.urls.urlbase}Billing/SaveBilling`, formData, { params });
  }

  GetAllStates() {
    return this.http.get<RequestResult<Status[]>>(`${this.urls.urlbase}Billing/GetStates`);
  }

  GetAllTypesBilling() {
    return this.http.get<RequestResult<TypeBilling[]>>(`${this.urls.urlbase}Billing/GetAllTypeBilling`);
  }

}
