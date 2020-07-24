import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ServiceBase } from 'src/app/shared/services/service.base';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { Vw_billing } from 'src/app/shared/interfaces/billing.interface';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { CostCenter } from 'src/app/shared/interfaces/costCenter.interface';
import { Money } from 'src/app/shared/interfaces/money.interface';
import { BillingService } from 'src/app/shared/services/billing.service';
import { Providers } from './../../shared/interfaces/providers.interface';
import { ControlErrorHelperService } from 'src/app/shared/helpers/controlError.helper';
import { Status } from 'src/app/shared/interfaces/status.interface';
import { PupupBillingComponent } from './pupup-billing/pupup-billing.component';
import { TypeBilling } from 'src/app/shared/interfaces/typeBilling.interface';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  dataSource = new MatTableDataSource();
  displayedColumns = ['numeroFactura', 'proveedor', 'tipoFactura', 'tipoProducto', 'costCenter',
    'fechaFactura', 'fechaLimite', 'fechaRadicado', 'valorText', 'estado', 'indicador'];

  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());
  providers: Providers[] = [];
  billings: Vw_billing[] = [];
  products: Product[] = [];
  costCenters: CostCenter[] = [];
  moneys: Money[] = [];
  states: Status[] = [];
  typesBilling: TypeBilling[];
  billing: Vw_billing;
  maxDate: Date;


  constructor(private serviceBase: ServiceBase, private billingService: BillingService, private helper: ControlErrorHelperService,
    public dialog: MatDialog, private router: Router) {
    this.getAllBillings();
    this.maxDate = new Date();
  }

  ngOnInit() {
    this.serviceBase.validateSession('/billing');
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getAllBillings(startDate?: string, endDate?: string) {
    this.billingService.GetAllBilling(startDate, endDate)
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.billings = res.result;
          this.dataSource = new MatTableDataSource(this.billings);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.helper.controlErros(res);
        }
      });
  }

  filterBilling() {
    const startDate = (document.getElementById('startDate') as HTMLInputElement).value;
    const endDate = (document.getElementById('endDate') as HTMLInputElement).value;
    if (!!startDate && !!endDate) {
      this.getAllBillings(new Date(startDate).toDateString(), new Date(endDate).toDateString());
    } else {
      (document.getElementById('startDate') as HTMLInputElement).value = null;
      (document.getElementById('endDate') as HTMLInputElement).value = null;
      this.getAllBillings();
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  setAprovalMatrix(row) {
    this.router.navigate(['billing', 'detailbilling', row.numeroFactura]);
  }

  addCostCenter() {
    const dialogRef = this.dialog.open(PupupBillingComponent, {
      height: 'auto',
      width: 'auto',
      data: this.billing,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllBillings();
    });
  }


}


