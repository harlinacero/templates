import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceBase } from 'src/app/shared/services/service.base';
import { RequestResult } from 'src/app/shared/interfaces/requestResult.interface';
import { ISession } from 'src/app/shared/interfaces/session.interface';


@Injectable()
export class Sessionervice {


  constructor(private http: HttpClient, private serviceBase: ServiceBase) {
  }

  login(username: string, password: string) {
    const urlbase = this.serviceBase.urls.urlbase;
    return this.http.post<RequestResult<ISession>>(`${urlbase}Session/Login`, {username, password});
  }


}
