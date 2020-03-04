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
          this.matrix = allMatrix.map(mat => {
            if (mat.costcenterid === this.costCenter.id) {
              return mat;
            }
          });
        }
      });
  }


  // getPersonsWithRol(persons: Person[]) {
  //   this.personsWithRol = persons.map(person => {
  //     return {
  //       personId: person.id,
  //       personName: person.firstName + ' ' + person.lastName,
  //       personRole: this.roles.find(r => r.id === person.roleId).name
  //     };
  //   });
  // }

  // changeAprobalValues(event) {
  //   this.aprobationLevels = new Array(this.data.apobationLevels);
  // }

  addLevel() {
    const newLevel: AprobalMatrix = {
      costcenterid: this.costCenter.id,
      datemodified: new Date(),
      daysToAprobate: 0,
      levelAprobation: this.matrix.length + 1,
      personid: 0,
      userchange: 1,
      valueMin: 0,
      valueMax: 0
    };
    this.matrix.push(newLevel);
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
