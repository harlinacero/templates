import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '../../admin/admin.service';

import { Company } from '../../../shared/interfaces/company.interface';

@Component({
  selector: 'app-popup-company',
  templateUrl: './popup-company.component.html',
  styleUrls: ['./popup-company.component.scss']
})
export class PopupCompanyComponent implements OnInit {
  title = 'Modificar Datos de Empresa';
  data: Company;

  constructor(public dialogRef: MatDialogRef<PopupCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public company: Company, private userService: AdminService) {

    if (company === null) {
      this.data = {
        accountableInterface: true,
        purchaseOrders: false,
        businessName: '',
        datemodified: new Date(),
        emailCompany: '',
        emailTreasury: '',
        logo: '',
        nit: '',
        userchange: 1
      };
    }

    // this.data = company;

  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.userService.saveCompany(this.data).subscribe(res => {
      if (res.isSuccesfull) {
        alert('Producto actualizado');
      }
    });
  }
}
