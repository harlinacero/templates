import { Injectable } from '@angular/core';

import { Urls } from './../../../shared/interfaces/urls';
import { HttpClient } from '@angular/common/http';
import { ServiceBase } from 'src/app/shared/services/service.base';
import { RequestResult } from 'src/app/shared/interfaces/requestResult.interface';
import { AprovalMatrixDTO, AprobalMatrixTable } from 'src/app/shared/interfaces/aprovalMatrix.interface';
import { Money } from 'src/app/shared/interfaces/money.interface';

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
    return this.http.get<RequestResult<AprobalMatrixTable[]>>(`${this.urls.urlbase}AprovaMatrix/GetAllAprovalMatrix`);
  }

  SaveAprovalMatrix(matrix: AprovalMatrixDTO) {
    return this.http.post<RequestResult<any>>(`${this.urls.urlbase}AprovaMatrix/SaveAprovalMatrix`, matrix);
  }

  GetAllMoney() {
    return this.http.get<RequestResult<Money[]>>(`${this.urls.urlbase}AprovaMatrix/GetAllMoney`);
  }
}
