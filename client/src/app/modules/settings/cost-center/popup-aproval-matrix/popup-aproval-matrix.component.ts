import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AprobalMatrix } from 'src/app/shared/interfaces/aprovalMatrix.interface';
import { CostCenter } from 'src/app/shared/interfaces/costCenter.interface';
import { AdminService } from '../../../../shared/services/admin.service';
import { Person } from 'src/app/shared/interfaces/person.interface';
import { Role } from 'src/app/shared/interfaces/role.interface';
import { AprovalMatrixService } from 'src/app/shared/services/aprovalMatrix.service';

@Component({
  selector: 'app-popup-aproval-matrix',
  templateUrl: './popup-aproval-matrix.component.html',
  styleUrls: ['./popup-aproval-matrix.component.scss']
})
export class PopupAprovalMatrixComponent implements OnInit {

  title = 'Matriz de Aprobación ';
  matrix: AprobalMatrix[];
  id: number;
  costCenter: CostCenter;
  persons: Person[];
  personsWithRol: any[];
  roles: Role[];

  constructor(public dialogRef: MatDialogRef<PopupAprovalMatrixComponent>,
    @Inject(MAT_DIALOG_DATA) public cost: CostCenter,
    private adminService: AdminService,
    private service: AprovalMatrixService) {
    this.costCenter = cost;
    this.geAllRoles();

  }

  ngOnInit() {
  }

  // getCostCenter() {
  //   this.adminService.getAllCostCenter()
  //     .subscribe(res => {
  //       if (res.isSuccesfull) {
  //         this.costCenters = res.result.find(x => x.id === this.costCenter.id);
  //         // this.title += this.costCenters.find(c => c.id === this.levelsAproval[0].costcenterid);
  //         this.geAllRoles();
  //       }
  //     });
  // }


  geAllRoles() {
    this.adminService.getAllRoles()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.roles = res.result;
          this.getAllPerson();
        }
      });
  }

  getAllPerson() {
    this.adminService.getAllUsers()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.persons = res.result;
          this.getMatrix();
        }
      });
  }

  getMatrix() {
    this.service.GetAllAprovalMatrix()
      .subscribe(res => {
        if (res.isSuccesfull) {
          const allMatrix = res.result;
          this.matrix = [];
          for (const mat of allMatrix) {
            if (mat.costCenterId === this.costCenter.id) {
              this.matrix.push(mat);
            }
          }
          console.log(this.matrix);
        }
      });
  }



  addLevel() {
    const newLevel: AprobalMatrix = {
      costCenterId: this.costCenter.id,
      dateModified: new Date(),
      daysToAprobate: 0,
      levelAprobation: this.matrix.length + 1,
      personId: 0,
      userChange: 1,
      valueMin: 0,
      valueMax: 0
    };
    this.matrix.push(newLevel);
  }

  removeLevel(i) {
    this.matrix.splice(i, 1);
  }

  selectedValueChange(value, namefield, i) {
    this.matrix[i][namefield] = value;
    console.log(this.matrix);
  }

  getValueMin(i) {
    if (!!this.matrix[i - 1]) {
      const a = this.matrix[i - 1].valueMax;
      return +a + 1;
    } else {
      return 0;
    }
  }

  getValueMax(i) {
    if (!!this.matrix[i].valueMin) {
      const a = this.matrix[i].valueMin;
      return +a + 1;
    } else {
      return 0;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  save() {
    this.service.SaveAprovalMatrix(this.matrix).subscribe(res => {
      if (res.isSuccesfull) {
        alert('Matriz de Aprobación actualizada');
      }
    });
  }

}
