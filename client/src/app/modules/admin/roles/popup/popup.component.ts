import { Role } from 'src/app/shared/interfaces/role';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  title = 'Agregar Rol';

  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Role, private userService: AdminService, ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    const role: Role = {
      dateModified: new Date(),
      description: this.data.description,
      name: this.data.name,
      userChange: 1,
      id: 0
    };
    this.userService.saveRole(role).subscribe(res => {
      if (res.isSuccesfull) {
        alert(res.isSuccesfull);
      }
    });
  }
}
