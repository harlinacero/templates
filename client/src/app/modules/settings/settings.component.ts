import { Company } from './../../shared/interfaces/company.interface';
import { Component, OnInit } from '@angular/core';
import { PopupCompanyComponent } from './popup-company/popup-company.component';
import { AdminService } from '../admin/admin.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  company: Company;
  options: any[] = [
    { key: true, value: 'Si' },
    { key: false, value: 'No' }
  ]

  constructor(private userService: AdminService, public dialog: MatDialog) {
    this.getCompanys();
  }


  ngOnInit() {
  }



  getCompanys() {
    this.userService.getCompany()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.company = res.result;
        }
      });
  }

  updateProduct(row) {
    const dialogRef = this.dialog.open(PopupCompanyComponent, {
      height: 'auto',
      width: '600px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.getCompanys();
    });
  }

  saveCompany() {
    const dialogRef = this.dialog.open(PopupCompanyComponent, {
      height: 'auto',
      width: '600px',
      data: this.company
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCompanys();
    });
  }

}
