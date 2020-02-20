import { Component, OnInit } from '@angular/core';
import { ServiceBase } from 'src/app/shared/services/service.base';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private serviceBase: ServiceBase) { }

  ngOnInit() {
    this.serviceBase.validateSession();
  }

}
