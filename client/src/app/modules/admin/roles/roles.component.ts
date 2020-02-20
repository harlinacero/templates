import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/shared/interfaces/role';
import { AdminService } from '../admin.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  displayedColumns = ['id', 'name', 'description', 'datemodified'];

  dataSource: MatTableDataSource<Role[]>;
  roles: Role[];

  constructor(private userService: AdminService) {
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
        this.dataSource = new MatTableDataSource(res.result);
        this.roles.push(res.result);
      }
    });
  }

  addRol() {
    const role: Role = {
      datemodified: new Date(),
      description: '',
      name: 'SuperAdmin',
      userChange: 1,
      id: null
    };

    this.userService.saveRole(role).subscribe(res => {
      if (res.isSuccesfull) {
        console.log(res.result);
      }
    });
  }

}
