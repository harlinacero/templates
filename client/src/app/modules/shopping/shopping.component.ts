import { Component, OnInit } from '@angular/core';
import { ServiceBase } from 'src/app/shared/services/service.base';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  constructor(private serviceBase: ServiceBase) { }

  ngOnInit() {
    this.serviceBase.validateSession();
  }
}
