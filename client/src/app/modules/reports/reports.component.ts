import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceBase } from 'src/app/shared/services/service.base';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Vw_billing } from 'src/app/shared/interfaces/billing.interface';
import { BillingService } from 'src/app/shared/services/billing.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ControlErrorHelperService } from 'src/app/shared/helpers/controlError.helper';
import { AdminService } from 'src/app/shared/services/admin.service';
import { Providers } from 'src/app/shared/interfaces/providers.interface';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { CostCenter } from 'src/app/shared/interfaces/costCenter.interface';
import { Status } from 'src/app/shared/interfaces/status.interface';
import { TypeBilling } from 'src/app/shared/interfaces/typeBilling.interface';
import { TableUtil } from "./tableUtil";
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  displayedColumns = ['numberbilling', 'providerid', 'billingtype', 'producttype', 'costcenterid',
    'datebilling', 'datelimit', 'datefiled', 'valuebill', 'stateid', 'indicator'];

  dataSource: MatTableDataSource<any>;
  billings: Vw_billing[] = [];
  billing: Vw_billing;
  providers: Providers[] = [];
  products: Product[] = [];
  costCenters: CostCenter[] = [];
  states: Status[] = [];
  typesBilling: TypeBilling[];

  @ViewChild('TABLE', null) table: ElementRef;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private serviceBase: ServiceBase, private billingService: BillingService,
    private adminService: AdminService,
    private helper: ControlErrorHelperService,
    public dialog: MatDialog, private route: ActivatedRoute, private router: Router) {
    this.getAllBillings();
  }

  ngOnInit() {
    this.serviceBase.validateSession();
    this.getAllProviders();
    this.getAllProducts();
    this.getAllCostCenters();
    this.getAllTypeBilling();
    this.getAllStates();
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

  getAllProviders() {
    this.adminService.getAllProviders()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.providers = res.result;
        } else {
          this.helper.controlErros(res);
        }
      });
  }

  getAllTypeBilling() {
    this.billingService.GetAllTypesBilling()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.typesBilling = res.result;
        } else {
          this.helper.controlErros(res);
        }
      });
  }


  getAllProducts() {
    this.adminService.getAllProducts()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.products = res.result;
        } else {
          this.helper.controlErros(res);
        }
      });
  }

  getAllCostCenters() {
    this.adminService.getAllCostCenter()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.costCenters = res.result;
        } else {
          this.helper.controlErros(res);
        }
      });
  }

  getAllStates() {
    this.billingService.GetAllStates()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.states = res.result;
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

  exportTable() {
  const workSheet = XLSX.utils.json_to_sheet(this.dataSource.data, {header:['dataprop1', 'dataprop2']});
    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet);
  }

}
