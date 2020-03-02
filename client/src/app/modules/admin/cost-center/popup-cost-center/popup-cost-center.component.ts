import { Component, OnInit, Inject } from '@angular/core';
import { CostCenter } from 'src/app/shared/interfaces/costCenter.interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '../../../../shared/services/admin.service';
@Component({
  selector: 'app-popup-cost-center',
  templateUrl: './popup-cost-center.component.html',
  styleUrls: ['./popup-cost-center.component.scss']
})
export class PopupCostCenterComponent implements OnInit {

  title = 'Agregar Centro de Costo';
  data: CostCenter;

  constructor(public dialogRef: MatDialogRef<PopupCostCenterComponent>,
              @Inject(MAT_DIALOG_DATA) public costCenter: CostCenter, private userService: AdminService) {
    this.data = costCenter;

    if (this.data.id > 0) {
      this.title = 'Modificar Centro de Costo';
    }

  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.userService.saveCostCenter(this.data).subscribe(res => {
      if (res.isSuccesfull) {
        alert('Centro de Costo actualizado');

      }
    });
  }
}
