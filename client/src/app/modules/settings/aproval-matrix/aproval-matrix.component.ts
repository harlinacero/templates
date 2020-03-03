import { Component, OnInit } from '@angular/core';
import { AprovalMatrixService } from './aproval-matrix.service';
import { PopupAprovalMatrixComponent } from './popup-aproval-matrix/popup-aproval-matrix.component';
import { AprobalMatrixTable, AprovalMatrixDTO } from 'src/app/shared/interfaces/aprovalMatrix.interface';
import { MatTableDataSource, MatDialog } from '@angular/material';

@Component({
  selector: 'app-aproval-matrix',
  templateUrl: './aproval-matrix.component.html',
  styleUrls: ['./aproval-matrix.component.scss']
})
export class AprovalMatrixComponent implements OnInit {

  displayedColumns = ['id', 'productcode', 'productDescription', 'costCenterName', 'money', 'exangeRate', 'valueMax', 'apobationLevels'];
  dataSource: MatTableDataSource<any>;
  aprovalMatrixs: AprobalMatrixTable[];
  matrix: AprovalMatrixDTO;

  constructor(private aprovalMatrixService: AprovalMatrixService, public dialog: MatDialog) {
    this.getAllAprovalMatrix();
  }


  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getAllAprovalMatrix() {
    this.aprovalMatrixService.GetAllAprovalMatrix()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.aprovalMatrixs = res.result;
          this.dataSource = new MatTableDataSource(res.result);
        }
      });
  }

  updateCostCenter(row) {
    const dialogRef = this.dialog.open(PopupAprovalMatrixComponent, {
      height: 'auto',
      width: 'auto',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.getAllAprovalMatrix();
    });
  }

  addMatrix() {
    const dialogRef = this.dialog.open(PopupAprovalMatrixComponent, {
      height: 'auto',
      width: 'auto',
      data: this.matrix
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllAprovalMatrix();
    });
  }
}
