import { PopupUsersComponent } from './popup-users/popup-users.component';
import { Person } from './../../../shared/interfaces/person';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns = ['id', 'documentType', 'documentNumber', 'firstName', 'secondName', 'lastName',
    'secondLastName', 'email', 'phone', 'roleId'];

  dataSource: MatTableDataSource<any>;
  persons: Person[];
  person: Person;

  constructor(private userService: AdminService, public dialog: MatDialog) {
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
        this.persons = res.result.map(person => {
          person.dateModified = new Date(person.dateModified);
          return person;
        });
        this.dataSource = new MatTableDataSource(res.result);
      }
    });
  }

  adduser() {
    const person: Person = this.getPerson(0, '', '', 1, '', '', '', '', '', '', '', 1);
    const dialogRef = this.dialog.open(PopupUsersComponent, {
      height: 'auto',
      width: 'auto',
      data: this.person
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.person = result;
      this.persons.push(this.person);
    });
  }

  updatePerson(event) {
    const person: Person = event;
    person.userChange = 1;

    const dialogRef = this.dialog.open(PopupUsersComponent, {
      height: 'auto',
      width: 'auto',
      data: this.person
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.person = result;
      this.persons.push(this.person);
    });
  }


  getPerson(id: number, address: string, documentNumber: string, documentType: number, email: string,
            firstName: string, secondName: string, lastName: string, secondLastName: string, phone: string,
            password: string, rolId: number, ): Person {
    return {
      id: null,
      address,
      dateModified: new Date(),
      documentNumber,
      documentType,
      email,
      firstName,
      secondName,
      lastName,
      secondLastName,
      phone,
      password,
      rolId,
      userChange: 1
    };
  }
}
