import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '../../../../shared/services/admin.service';
import { Role } from 'src/app/shared/interfaces/role.interface';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  title = 'Agregar Rol';
  currentUser: string;
  data: Role;

  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public role: Role, private userService: AdminService) {
    this.data = role;
    if (this.role.id > 0) {
      this.title = 'Modificar Rol';
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    const role: Role = this.getRole(this.data.id, this.data.name, this.data.description);
    this.userService.saveRole(role).subscribe(res => {
      if (res.isSuccesfull) {
        alert('Rol Creado');

      }
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
