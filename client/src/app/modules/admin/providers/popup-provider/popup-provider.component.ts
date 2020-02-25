import { Component, OnInit, Inject } from '@angular/core';
import { Providers } from './../../../../shared/interfaces/providers.interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-popup-provider',
  templateUrl: './popup-provider.component.html',
  styleUrls: ['./popup-provider.component.scss']
})
export class PopupProviderComponent implements OnInit {
  title = 'Agregar Proveedor';
  data: Providers;


  constructor(public dialogRef: MatDialogRef<PopupProviderComponent>,
    @Inject(MAT_DIALOG_DATA) public provide: Providers, private userService: AdminService) {
    this.data = provide;

    if (this.data.id > 0) {
      this.title = 'Modificar Proveedor';
    }

  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.userService.saveProvider(this.data).subscribe(res => {
      if (res.isSuccesfull) {
        alert('Proveedor actualizado');
      }
    });
  }

}
