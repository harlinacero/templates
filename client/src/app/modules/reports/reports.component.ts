import { Component, OnInit } from '@angular/core';
import { ServiceBase } from 'src/app/shared/services/service.base';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor(private serviceBase: ServiceBase) { }

  ngOnInit() {
    this.serviceBase.validateSession();
  }

}
