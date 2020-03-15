import { Component, OnInit } from '@angular/core';
import { ServiceBase } from 'src/app/shared/services/service.base';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  constructor(private serviceBase: ServiceBase, private router: Router) { }

  ngOnInit() {
    this.serviceBase.validateSession();
    this.router.navigate(['billing']);

  }
}
