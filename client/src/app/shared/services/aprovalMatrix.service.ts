import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Urls } from '../interfaces/urls';
import { ServiceBase } from './service.base';
import { AprovalMatrix } from '../interfaces/aprovalMatrix.interface';
import { RequestResult } from '../interfaces/requestResult.interface';
import { Money } from '../interfaces/money.interface';
import { URLS } from '../globals/localStorage.const';

@Injectable({
  providedIn: 'root',
})

export class AprovalMatrixService {


  urls: Urls;

  constructor(private http: HttpClient, private serviceBase: ServiceBase) {
    this.urls = JSON.parse(localStorage.getItem(URLS));
    if (this.urls === undefined) {
      this.serviceBase.validateSession();
    }
  }

  getAllMoney() {
    return this.http.get<RequestResult<Money[]>>(`${this.urls.urlbase}AprovaMatrix/GetAllMoney`);
  }

  GetAllAprovalMatrix() {
    return this.http.get<RequestResult<AprovalMatrix[]>>(`${this.urls.urlbase}AprovaMatrix/GetAllAprovalMatrix`);
  }

  SaveAprovalMatrix(levelsAproval: AprovalMatrix[]) {
    return this.http.post<RequestResult<AprovalMatrix[]>>(`${this.urls.urlbase}AprovaMatrix/SaveAprovalMatrix`, levelsAproval);
  }
}
