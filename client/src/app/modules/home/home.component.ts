import { Component, OnInit } from '@angular/core';
import { ServiceBase } from 'src/app/shared/services/service.base';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private serviceBase: ServiceBase) { }

  ngOnInit() {
    this.serviceBase.validateSession();
  }

}
