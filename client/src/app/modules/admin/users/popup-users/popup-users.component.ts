import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../../../shared/services/admin.service';
import { Person, DocumentType } from 'src/app/shared/interfaces/person.interface';
import { Role } from 'src/app/shared/interfaces/role.interface';

@Component({
  selector: 'app-popup-users',
  templateUrl: './popup-users.component.html',
  styleUrls: ['./popup-users.component.scss']
})
export class PopupUsersComponent {
  title = 'Agregar Usuario';
  currentUser: string;
  data: Person;
  roles: Role[] = [];
  documents: DocumentType[];
  email = new FormControl('', [Validators.required, Validators.email]);
  disabled = false;

  constructor(
    public dialogRef: MatDialogRef<PopupUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public person: Person, private userService: AdminService) {

    this.data = person;
    this.getRoles();
    this.getDocuments();
    if (this.data.id > 0) {
      this.title = 'Modificar Usuario';
      this.disabled = true;
      // this.data.password = atob(person.password);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getRoles() {
    this.userService.getAllRoles()
      .subscribe(result => {
        if (result.isSuccesfull) {
          for (const element of result.result) {
            this.roles.push(element.role);
          };
        }
      });
  }

  getDocuments() {
    this.userService.getDocumentTypes()
      .subscribe(result => {
        if (result.isSuccesfull) {
          this.documents = result.result;
        }
      });
  }


  validatePassword(event) {
    console.log(event);
  }


  save() {
    const person: Person = this.getPerson(this.person.id, this.person.address, this.person.documentNumber,
      this.person.documentType, this.person.email, this.person.firstName, this.person.secondName,
      this.person.lastName, this.person.secondLastName, this.person.phone, this.person.password,
      this.person.roleId);
    person.password = btoa(person.password);
    this.userService.saveUser(person).subscribe(res => {
      if (res.isSuccesfull) {
        alert('Usuario actualizado');
      } else {
        alert(res.message);
      }
    });
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Debe ingresar un correo válido' :
      this.email.hasError('email') ? 'El email no es válido' : '';
  }

  getPerson(id: number, address: string, documentNumber: string, documentType: number, email: string,
    firstName: string, secondName: string, lastName: string, secondLastName: string, phone: string,
    password: string, roleId: number): Person {
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

}
