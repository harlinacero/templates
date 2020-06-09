import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CostCenter } from 'src/app/shared/interfaces/costCenter.interface';
import { AdminService } from '../../../shared/services/admin.service';
import { PopupCostCenterComponent } from './popup-cost-center/popup-cost-center.component';
import { PopupAprovalMatrixComponent } from './popup-aproval-matrix/popup-aproval-matrix.component';

@Component({
  selector: 'app-cost-center',
  templateUrl: './cost-center.component.html',
  styleUrls: ['./cost-center.component.scss']
})
export class CostCenterComponent implements OnInit {

  displayedColumns = ['name', 'description', 'matriz'];

  dataSource: MatTableDataSource<any>;
  costCenters: CostCenter[];
  costCenter: CostCenter;

  constructor(private userService: AdminService, public dialog: MatDialog) {
    this.getAllCostCenter();
  }


  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getAllCostCenter() {
    this.userService.getAllCostCenter()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.costCenters = res.result;
          this.dataSource = new MatTableDataSource(res.result);
        }
      });
  }

  updateCostCenter(row) {
    const dialogRef = this.dialog.open(PopupCostCenterComponent, {
      height: 'auto',
      width: '600px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.getAllCostCenter();
    });
  }

  setAprovalMatrix(row) {
    const dialogRef = this.dialog.open(PopupAprovalMatrixComponent, {
      height: '500px',
      width: '1200px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllCostCenter();
    });
  }

  addCostCenter() {
    const dialogRef = this.dialog.open(PopupCostCenterComponent, {
      height: 'auto',
      width: '600px',
      data: this.costCenter
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllCostCenter();
    });
  }

}
