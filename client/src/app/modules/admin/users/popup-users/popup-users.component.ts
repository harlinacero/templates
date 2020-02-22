import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '../../admin.service';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-popup-users',
  templateUrl: './popup-users.component.html',
  styleUrls: ['./popup-users.component.scss']
})
export class PopupUsersComponent {
  title = 'Agregar Usuario';
  currentUser: string;
  data: Person;

  constructor(
    public dialogRef: MatDialogRef<PopupUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public person: Person, private userService: AdminService) {
    this.data = person;
    if (this.data.id !== 0) {
      this.title = 'Modificar Usuario';
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    const person: Person = this.getPerson(this.person.id, this.person.address, this.person.documentNumber,
      this.person.documentType, this.person.email, this.person.firstName, this.person.secondName,
      this.person.lastName, this.person.secondLastName, this.person.phone, this.person.password,
      this.person.rolId);
    this.userService.saveUser(person).subscribe(res => {
      if (res.isSuccesfull) {
        alert(res.isSuccesfull);
      }
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
