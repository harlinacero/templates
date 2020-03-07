import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { AdminService } from '../../../shared/services/admin.service';
import { PopupUsersComponent } from './popup-users/popup-users.component';
import { Person, DocumentType } from './../../../shared/interfaces/person.interface';
import { Role } from 'src/app/shared/interfaces/role.interface';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  displayedColumns = ['id', 'documentType', 'name', 'email', 'phone', 'roleId'];

  dataSource: MatTableDataSource<any>;
  persons: Person[];
  person: Person;
  documents: DocumentType[];
  roles: Role[] = [];

  constructor(private userService: AdminService, public dialog: MatDialog) {
    this.getDocuments();
    // this.getUsers();
    // this.getRols();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(res => {
      if (res.isSuccesfull) {
        this.persons = res.result.map(person => {
          person.dateModified = new Date(person.dateModified);
          person.documentNumber = this.getDocumentName(person.documentType).resume + person.documentNumber;
          return person;
        });
        this.dataSource = new MatTableDataSource(res.result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  getDocuments() {
    this.userService.getDocumentTypes().subscribe(res => {
      if (res.isSuccesfull) {
        this.documents = res.result;
        this.getRols();
      }
    });
  }


  adduser() {
    const person: Person = this.getPerson(0, '', '', 1, '', '', '', '', '', '', '', 1);
    const dialogRef = this.dialog.open(PopupUsersComponent, {
      height: 'auto',
      width: '600px',
      data: this.person
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUsers();
    });
  }

  updatePerson(event) {
    this.person = event;
    const dialogRef = this.dialog.open(PopupUsersComponent, {
      height: 'auto',
      width: '600px',
      data: this.person
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUsers();
    });
  }


  getPerson(id: number, address: string, documentNumber: string, documentType: number, email: string,
    firstName: string, secondName: string, lastName: string, secondLastName: string, phone: string,
    password: string, roleId: number, ): Person {
    return {
      id,
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
      roleId,
      userChange: 1
    };
  }

  getDocumentName(id: number) {
    if (!!this.documents) {
      return this.documents.find(x => x.id = id);
      // for (const iterator of this.documents) {
      //   if (iterator.id === id) {
      //     return iterator;
      //   }
      // }
    }
  }

  getRols() {
    this.userService.getAllRoles()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.roles = res.result;
          this.getUsers();
        }
      });
  }

  getRolName(id: number) {
    // return this.documents.find(x => { x.id === id }).resume;
    for (const iterator of this.roles) {
      if (iterator.id === id) {
        return iterator;
      }
    }
  }
}
