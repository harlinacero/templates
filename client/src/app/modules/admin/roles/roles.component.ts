import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Role } from 'src/app/shared/interfaces/role.interface';


import { AdminService } from '../../../shared/services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  displayedColumns =
    ['id', 'name', 'description'];
  dataSource = new MatTableDataSource();
  roles: Role[];
  role: Role;

  constructor(private userService: AdminService, public dialog: MatDialog) {
    this.getRoles();
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getRoles() {
    this.userService.getAllRoles().subscribe(res => {
      if (res.isSuccesfull) {
        this.roles = res.result;
        this.dataSource = new MatTableDataSource(this.roles);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  openDialog(): void {
    this.role = this.getRole(0, '', '');
    const dialogRef = this.dialog.open(PopupComponent, {
      height: 'auto',
      width: 'auto',
      data: this.role
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getRoles();
    });
  }

  updateRol(event) {
    this.role = this.getRole(event.id, event.name, event.description);
    const dialogRef = this.dialog.open(PopupComponent, {
      height: 'auto',
      width: 'auto',
      data: this.role
    });

    dialogRef.afterClosed().subscribe(result => {
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
