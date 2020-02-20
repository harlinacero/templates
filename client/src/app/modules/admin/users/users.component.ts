import { Person } from './../../../shared/interfaces/person';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns = ['id', 'documentType', 'documentNumber', 'firstName', 'secondName', 'lastName',
    'secondLastName', 'email', 'phone', 'roleId'];

  dataSource: MatTableDataSource<Person[]>;

  constructor(private userService: AdminService) {
    this.getusers();
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getusers() {
    this.userService.getAllUsers().subscribe(res => {
      if (res.isSuccesfull) {
        this.dataSource = new MatTableDataSource(res.result);
        console.log(res.result);
      }
    });
  }

  adduser() {
    const person: Person = {
      address: 'Calle 2',
      datemodified: new Date(),
      documentNumber: '31321',
      documentType: 1,
      email: 'harlin@mail.com',
      firstName: 'harlin',
      secondName: 'fer',
      lastName: 'Acero',
      phone: '2121',
      password: 'asdfasdf',
      rolId: 1,
      secondLastName: 'Acero',
      userChange: 1,
      id: null
    };

    this.userService.saveUser(person).subscribe(res => {
      if (res.isSuccesfull) {
        console.log(res.result);
      }
    });
  }
}
