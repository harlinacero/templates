import { MenuByRole } from './../../../../shared/interfaces/session.interface';
import { Component, Inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '../../../../shared/services/admin.service';
import { Role, RoleDTO } from 'src/app/shared/interfaces/role.interface';
import { Menu } from 'src/app/shared/interfaces/session.interface';
import { ServiceBase } from 'src/app/shared/services/service.base';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/shared/interfaces/myErrorStateMatcher';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  title = 'Agregar Rol';
  currentUser: string;
  dataSource: MatTableDataSource<Menu>;

  displayedColumns = ['name', 'select'];
  selection = new SelectionModel<Menu>(true, []);
  formGroup: FormGroup;
  name: string;
  description: string;


  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public roledto: RoleDTO, private userService: AdminService, private serviceBase: ServiceBase,
    private cdref: ChangeDetectorRef) {
    if (this.roledto.role.id > 0) {
      this.title = 'Modificar Rol';
    }

    this.getMenus();

  }
  ngOnInit(): void {
    this.name = this.roledto.role.name;
    this.description = this.roledto.role.description;

    this.formGroup = new FormGroup({
      'name': new FormControl(this.roledto.role.name, [
        Validators.required
      ]),
      'description': new FormControl(this.roledto.role.description, [Validators.required])
    });
  }

  ngAfterContentChecked() {
    // this.sampleViewModel.DataContext = this.DataContext;
    // this.sampleViewModel.Position = this.Position;
    this.cdref.detectChanges();

  }

  getMenus() {
    if (!!this.serviceBase.session) {
      this.dataSource = new MatTableDataSource<Menu>(this.roledto.menus);
    }
  }

  updateRol(row) {

  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Menu): string {
    // if (this.selection.isSelected(row)) {
    //   if (!this.roledto.menuByRole.find(me => me.idMenu === row.id)) {
    //     this.roledto.menuByRole.push({ id: 0, idMenu: row.id, idRole: this.roledto.role.id });
    //   }
    // } else {
    //   var index = this.roledto.menuByRole.findIndex(me => me.idMenu === row.id);
    //   if (!index) {
    //     this.roledto.menuByRole.splice(index, 1);
    //   }
    // }
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }

    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;

  }

  verifyPermiss(row?: Menu) {
    if (!!row) {
      const menu = this.roledto.menuByRole.find(me => me.idMenu === row.id);
      if (menu) this.selection.select(row);
      return (!!menu) ? true : false;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }



  matcher = new MyErrorStateMatcher();

  save(value) {
    if (!!value.name) {
      const message = (this.roledto.role.id === 0) ? 'Rol ' + value.name + ' creado' : 'Rol ' + value.name + ' actualizado';

      // let listMenus: Menu[] = [];
      // this.roledto.menus.forEach(menu => {
      //   const me = this.roledto.menuByRole.find(me => me.idMenu === menu.id);
      //   if(!!me) {
      //     listMenus.push(menu);
      //   }
      // });

      const roleDTO: RoleDTO = {
        role: this.getRole(this.roledto.role.id, value.name, value.description),
        menus: this.selection.selected,
        menuByRole: []
      };
      this.userService.saveRole(roleDTO).subscribe(res => {
        if (res.isSuccesfull) {
          alert(message);
        } else {
          alert(message);
        }
      });
    }

  }


  getRole(id: number, name: string, description: string): Role {
    return {
      dateModified: new Date(),
      description,
      name,
      userChange: 1,
      id
    };
  }
}
