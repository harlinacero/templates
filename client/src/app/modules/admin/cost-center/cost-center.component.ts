import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CostCenter } from 'src/app/shared/interfaces/costCenter.interface';
import { AdminService } from '../../../shared/services/admin.service';
import { PopupCostCenterComponent } from './popup-cost-center/popup-cost-center.component';

@Component({
  selector: 'app-cost-center',
  templateUrl: './cost-center.component.html',
  styleUrls: ['./cost-center.component.scss']
})
export class CostCenterComponent implements OnInit {

  displayedColumns = ['name', 'description'];

  dataSource: MatTableDataSource<any>;
  costCenters: CostCenter[];
  costCenter: CostCenter;

  constructor(private userService: AdminService, public dialog: MatDialog) {
    this.getProducts();
  }


  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getProducts() {
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
      this.getProducts();
    });
  }

  addCostCenter() {
    const dialogRef = this.dialog.open(PopupCostCenterComponent, {
      height: 'auto',
      width: '600px',
      data: this.costCenter
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProducts();
    });
  }

}
