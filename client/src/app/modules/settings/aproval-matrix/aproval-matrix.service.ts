import { Injectable } from '@angular/core';

import { Urls } from './../../../shared/interfaces/urls';
import { HttpClient } from '@angular/common/http';
import { ServiceBase } from 'src/app/shared/services/service.base';
import { RequestResult } from 'src/app/shared/interfaces/requestResult.interface';
import { AprobalMAtrixTable } from 'src/app/shared/interfaces/aprovalMatrix.interface';

@Injectable({
  providedIn: 'root',
})
export class AprovalMatrixService {
  urls: Urls;

  constructor(private http: HttpClient, private serviceBase: ServiceBase) {
    this.urls = JSON.parse(localStorage.getItem('urls'));
    if (this.urls === undefined) {
      this.serviceBase.validateSession();
    }
  }

  GetAllAprovalMatrix() {
    return this.http.get<RequestResult<AprobalMAtrixTable[]>>(`${this.urls.urlbase}AprovaMatrix/GetAllAprovalMatrix`);
  }
}
