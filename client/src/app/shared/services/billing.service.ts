import { Session } from './../interfaces/session.interface';
import { Injectable } from '@angular/core';
import { Urls } from '../interfaces/urls';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ServiceBase } from './service.base';
import { Billing, Vw_billing } from '../interfaces/billing.interface';
import { RequestResult } from '../interfaces/requestResult.interface';
import { Status } from '../interfaces/status.interface';
import { TypeBilling } from '../interfaces/typeBilling.interface';
import { SESSION, URLS } from '../globals/localStorage.const';
import { vw_billing_data } from '../interfaces/vw_billing_data.interface';

@Injectable({
  providedIn: 'root',
})
export class BillingService {



  private urls: Urls;
  private session: Session;

  constructor(private http: HttpClient, private serviceBase: ServiceBase) {
    this.urls = JSON.parse(localStorage.getItem(URLS));
    this.session = JSON.parse(localStorage.getItem(SESSION));
    if (this.urls === undefined || this.session === undefined) {
      this.serviceBase.validateSession();
    }
  }


  GetAllBilling(startDate?: string, endDate?: string) {
    const params = (!!startDate && !!endDate) ? `?startDate=${startDate}&endDate=${endDate}` : '';
    return this.http.get<RequestResult<Vw_billing[]>>(`${this.urls.urlbase}Billing/GetAllBilling` + params);
  }

  GetAllBillingWithParams(numberBilling: string, providerid: string, billingtype: string, producttype: string, costcenterid: string) {
    const params = `?numberBilling=${numberBilling}&providerid=${providerid}&billingtype=${billingtype}&producttype=${producttype}&costcenterid=${costcenterid}`;
    return this.http.get<RequestResult<Vw_billing[]>>(`${this.urls.urlbase}Billing/GetAllBillingWithParams` + params);
  }



  // SaveBilling(levelsAproval: Billing) {
  //   return this.http.post<RequestResult<Billing>>(`${this.urls.urlbase}Billing/SaveBilling`, levelsAproval);
  // }



  SaveBilling(billing: Billing, file: File) {
    billing.userChange = this.session.person.id;
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

  GetDetailBilling(numberbilling: number) {
    return this.http.get<RequestResult<vw_billing_data[]>>(`${this.urls.urlbase}Billing/GetDetailBilling?numberBilling=` + numberbilling);
  }

  ContinueAprovalProcess(numberbilling: string, newStatus: number, observations: string) {
    const params = `numberbilling=${numberbilling}&userCode=${this.session.person.id}&newStatus=${newStatus}&observations=${observations}`;
    return this.http.get<RequestResult<string>>(`${this.urls.urlbase}Billing/ContinueAprovalProcess?${params}`);
  }


}
