import { Component, OnInit } from '@angular/core';
import { ServiceBase } from 'src/app/shared/services/service.base';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private serviceBase: ServiceBase, private router: Router) { }

  ngOnInit() {
    this.serviceBase.validateSession();
    this.router.navigate(['billing']);

  }

}
