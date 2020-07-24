import { Injectable } from '@angular/core';
import { Urls } from '../interfaces/urls';
import { HttpClient } from '@angular/common/http';
import { ServiceBase } from './service.base';
import { URLS, SESSION } from '../globals/localStorage.const';
import { RequestResult } from '../interfaces/requestResult.interface';
import { vw_totalBilling, Vw_total_billing_by_month, Vw_total_billing_by_status } from '../interfaces/vw_totalBilling.interface';
import { Session } from '../interfaces/session.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  private urls: Urls;
  private session: Session;

  constructor(private http: HttpClient, private serviceBase: ServiceBase) {
    // this.urls = JSON.parse(localStorage.getItem(URLS));
    // this.session = JSON.parse(localStorage.getItem(SESSION));
    // if (this.urls === undefined || this.session === undefined) {
    //   this.serviceBase.validateSession();

    // }
  }

  getAllIndicators() {
    return this.http.get<RequestResult<vw_totalBilling[]>>(`${this.serviceBase.urls.urlbase}Home/GetAllIndicators`);
  }

  getAllBillingsByMonth() {
    return this.http.get<RequestResult<Vw_total_billing_by_month[]>>(`${this.serviceBase.urls.urlbase}Home/GetAllBillingsByMonth`);
  }

  getAllBillingsByStatus() {
    return this.http.get<RequestResult<Vw_total_billing_by_status[]>>(`${this.serviceBase.urls.urlbase}Home/GetAllBillingsByStatus`);
  }
}
