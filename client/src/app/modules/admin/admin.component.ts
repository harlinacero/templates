import { Component, OnInit } from '@angular/core';
import { ServiceBase } from 'src/app/shared/services/service.base';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private serviceBase: ServiceBase) { }

  ngOnInit() {
    this.serviceBase.validateSession();
  }

}
