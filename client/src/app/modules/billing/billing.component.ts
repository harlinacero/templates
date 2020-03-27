import { HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, AfterViewInit, Provider } from '@angular/core';
import { ServiceBase } from 'src/app/shared/services/service.base';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { ValueTransformer } from '@angular/compiler/src/util';
import { Billing, Vw_billing } from 'src/app/shared/interfaces/billing.interface';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { CostCenter } from 'src/app/shared/interfaces/costCenter.interface';
import { Money } from 'src/app/shared/interfaces/money.interface';
import { BillingService } from 'src/app/shared/services/billing.service';
import { AdminService } from 'src/app/shared/services/admin.service';
import { Providers } from './../../shared/interfaces/providers.interface';
import { ControlErrorHelperService } from 'src/app/shared/helpers/controlError.helper';
import { AprovalMatrixService } from './../../shared/services/aprovalMatrix.service';
import { Status } from 'src/app/shared/interfaces/status.interface';
import { PupupBillingComponent } from './pupup-billing/pupup-billing.component';
import { TypeBilling } from 'src/app/shared/interfaces/typeBilling.interface';
import { StatusBillingEnum } from 'src/app/shared/enums/statesBilling.enum';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit, AfterViewInit {

  displayedColumns = ['numberbilling', 'providerid', 'billingtype', 'producttype', 'costcenterid',
    'datebilling', 'datelimit', 'datefiled', 'valuebill', 'stateid', 'indicator'];

  dataSource: MatTableDataSource<any>;
  providers: Providers[] = [];
  billings: Vw_billing[] = [];
  products: Product[] = [];
  costCenters: CostCenter[] = [];
  moneys: Money[] = [];
  states: Status[] = [];
  typesBilling: TypeBilling[];
  billing: Vw_billing;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private serviceBase: ServiceBase, private billingService: BillingService, private adminService: AdminService,
    // tslint:disable-next-line: align
    private aprovalMatrixService: AprovalMatrixService, private helper: ControlErrorHelperService,
    // tslint:disable-next-line: align
    public dialog: MatDialog, private route: ActivatedRoute, private router: Router) {
    this.getAllBillings();
  }

  ngOnInit() {
    this.serviceBase.validateSession();
  }

  ngAfterViewInit() {

  }

  getAllBillings() {
    this.billingService.GetAllBilling()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.billings = res.result;
          this.dataSource = new MatTableDataSource(res.result);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.helper.controlErros(res);
        }
      });
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
    dialogRef.afterClosed().subscribe(result => {
      this.getAllBillings();
    });
  }


}


