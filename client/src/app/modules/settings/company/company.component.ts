import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/interfaces/company.interface';
import { AdminService } from '../../../shared/services/admin.service';
import { MatDialog } from '@angular/material';
import { PopupCompanyComponent } from './popup-company/popup-company.component';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  company: Company;
  options: any[] = [
    { key: true, value: 'Si' },
    { key: false, value: 'No' }
  ];

  constructor(private userService: CompanyService, public dialog: MatDialog) {
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
      width: 'auto',
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
      width: 'auto',
      data: this.company
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCompanys();
    });
  }
}
