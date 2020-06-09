import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '../../../../shared/services/admin.service';

import { Company } from '../../../../shared/interfaces/company.interface';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-popup-company',
  templateUrl: './popup-company.component.html',
  styleUrls: ['./popup-company.component.scss']
})
export class PopupCompanyComponent implements OnInit {
  title = 'Modificar Datos de Empresa';
  data: Company;
  options: any[] = [
    { key: true, value: 'Si' },
    { key: false, value: 'No' }
  ];

  constructor(public dialogRef: MatDialogRef<PopupCompanyComponent>, @Inject(MAT_DIALOG_DATA) public company: Company,
              private companyService: CompanyService) {

    if (company === null) {
      this.data = {
        accountableInterface: true,
        purchaseOrders: false,
        businessName: '',
        datemodified: new Date(),
        emailCompany: '',
        emailTreasury: '',
        emailMistica:'',
        passwordMistica:'',
        logo: '',
        nit: '',
        userchange: 1
      };
    }

    this.data = company;
    this.data.passwordMistica = atob(this.data.passwordMistica);

  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.data.passwordMistica = btoa(this.data.passwordMistica);
    this.companyService.saveCompany(this.data).subscribe(res => {
      if (res.isSuccesfull) {
        alert('La información de la empresa ha sido actualizada');
      }
    });
  }
}
