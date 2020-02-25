import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/shared/interfaces/role';
import { AdminService } from '../admin.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  displayedColumns = ['id', 'name', 'description'];
  dataSource: MatTableDataSource<any>;
  roles: Role[];
  role: Role;

  constructor(private userService: AdminService, public dialog: MatDialog) {
    this.getRoles();
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getRoles() {
    this.userService.getAllRoles().subscribe(res => {
      if (res.isSuccesfull) {
        this.roles = res.result.map(role => {
          role.dateModified = new Date(role.dateModified);
          return role;
        });
        this.dataSource = new MatTableDataSource(this.roles);
      }
    });
  }

  openDialog(): void {
    this.role = this.getRole(0, '', '');
    const dialogRef = this.dialog.open(PopupComponent, {
      height: '400px',
      width: '300px',
      data: this.role
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getRoles();
    });
  }

  updateRol(event) {
    this.role = this.getRole(event.id, event.name, event.description);
    const dialogRef = this.dialog.open(PopupComponent, {
      height: '400px',
      width: '300px',
      data: this.role
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.role = result;
    });

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
