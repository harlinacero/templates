import { Company } from './../../shared/interfaces/company.interface';
import { Component, OnInit } from '@angular/core';
import { PopupCompanyComponent } from './company/popup-company/popup-company.component';
import { AdminService } from '../../shared/services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { ServiceBase } from 'src/app/shared/services/service.base';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private serviceBase: ServiceBase) { }

  ngOnInit() {
    this.serviceBase.validateSession('/settings');
  }

}
