import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Urls } from '../interfaces/urls';
import { ServiceBase } from './service.base';
import { AprobalMatrix } from '../interfaces/aprovalMatrix.interface';
import { RequestResult } from '../interfaces/requestResult.interface';
import { Money } from '../interfaces/money.interface';

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

  getAllMoney() {
    return this.http.get<RequestResult<Money[]>>(`${this.urls.urlbase}AprovaMatrix/GetAllMoney`);
  }

  GetAllAprovalMatrix() {
    return this.http.get<RequestResult<AprobalMatrix[]>>(`${this.urls.urlbase}AprovaMatrix/GetAllAprovalMatrix`);
  }

  SaveAprovalMatrix(levelsAproval: AprobalMatrix[]) {
    return this.http.post<RequestResult<AprobalMatrix[]>>(`${this.urls.urlbase}AprovaMatrix/SaveAprovalMatrix`, levelsAproval);
  }
}
