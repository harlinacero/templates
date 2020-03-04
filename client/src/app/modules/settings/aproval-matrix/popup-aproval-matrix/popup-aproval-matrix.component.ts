import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AprovalMatrixDTO, AprobalMatrixTable } from 'src/app/shared/interfaces/aprovalMatrix.interface';
import { CostCenter } from 'src/app/shared/interfaces/costCenter.interface';
import { Money } from 'src/app/shared/interfaces/money.interface';
import { Product } from './../../../../shared/interfaces/product.interface';
import { AdminService } from './../../../../shared/services/admin.service';
import { AprovalMatrixService } from './../aproval-matrix.service';
import { Person } from 'src/app/shared/interfaces/person.interface';
import { Role } from 'src/app/shared/interfaces/role.interface';

@Component({
  selector: 'app-popup-aproval-matrix',
  templateUrl: './popup-aproval-matrix.component.html',
  styleUrls: ['./popup-aproval-matrix.component.scss']
})
export class PopupAprovalMatrixComponent implements OnInit {

  title = 'Agregar Matriz de Aprobación';
  data: AprovalMatrixDTO;
  id: number;
  products: Product[];
  costCenters: CostCenter[];
  moneys: Money[];
  aprobationLevels: any[] = [];
  persons: Person[];
  personsWithRol: any[];
  roles: Role[];

  constructor(public dialogRef: MatDialogRef<PopupAprovalMatrixComponent>,
    @Inject(MAT_DIALOG_DATA) public matrix: AprobalMatrixTable,
    private adminService: AdminService,
    private service: AprovalMatrixService) {
    this.data = {
      apobationLevels: matrix.apobationLevels,
      costCenterid: matrix.costCenterid,
      exangeRate: matrix.exangeRate,
      moneyid: matrix.moneyid,
      productid: matrix.productid,
      valueMax: matrix.valueMax,
      valueTotal: matrix.valueTotal,
      id: matrix.id,
      datemodified: matrix.datemodified,
      userchange: matrix.userchange,
      datelimit: new Date(matrix.datelimit),
      personss: matrix.personss
    };



    this.getProducts();
    if (this.data.id > 0) {
      this.title = 'Modificar Matriz de Aprobación';
      this.aprobationLevels = new Array(matrix.apobationLevels);
    }

  }

  ngOnInit() {
  }

  getProducts() {
    this.adminService.getAllProducts()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.products = res.result;
          this.getCostCenter();
        }
      });
  }

  getCostCenter() {
    this.adminService.getAllCostCenter()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.costCenters = res.result;
          this.getAllMoney();
        }
      });
  }

  getAllMoney() {
    this.service.GetAllMoney()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.moneys = res.result;
          this.geAllRoles();
        }
      });
  }
  geAllRoles() {
    this.adminService.getAllRoles()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.roles = res.result;
          this.getAllPerson();
        }
      })
  }

  getAllPerson() {
    this.adminService.getAllUsers()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.persons = res.result;
          this.getPersonsWithRol(this.persons);
        }
      });
  }


  getPersonsWithRol(persons: Person[]) {
    this.personsWithRol = persons.map(person => {
      return {
        personId: person.id,
        personName: person.firstName + ' ' + person.lastName,
        personRole: this.roles.find(r => r.id === person.roleId).name
      };
    });
  }

  changeAprobalValues(event) {
    this.aprobationLevels = new Array(this.data.apobationLevels);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    for (const key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        const element = this.data[key];
        if (key === 'datelimit' && element === undefined) {
          alert('El campo ' + key + ' no puede ser nullo ni idenfinido')
          return;
        }

      }
    }

    this.service.SaveAprovalMatrix(this.data).subscribe(res => {
      if (res.isSuccesfull) {
        alert('Matriz de Aprobación actualizada');

      }
    });
  }

}
