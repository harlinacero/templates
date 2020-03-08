import { Component, OnInit, ViewChild, AfterViewInit, Provider } from '@angular/core';
import { ServiceBase } from 'src/app/shared/services/service.base';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { ValueTransformer } from '@angular/compiler/src/util';
import { Billing } from 'src/app/shared/interfaces/billing.interface';
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

  displayedColumns = ['numberbilling', 'providerid', 'billingtype', 'producttype', 'costcenterid', 'moneyid', 'exchangerate',
    'datebilling', 'datelimit', 'datefiled', 'valuebill', 'stateid'];

  dataSource: MatTableDataSource<any>;
  providers: Providers[] = [];
  billings: Billing[] = [];
  products: Product[] = [];
  costCenters: CostCenter[] = [];
  moneys: Money[] = [];
  states: Status[] = [];
  typesBilling: TypeBilling[];
  billing: Billing;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private serviceBase: ServiceBase, private billingService: BillingService, private adminService: AdminService,
    // tslint:disable-next-line: align
    private aprovalMatrixService: AprovalMatrixService, private helper: ControlErrorHelperService,
    // tslint:disable-next-line: align
    public dialog: MatDialog) {
    this.getAllCostCenters();
    this.getAllMoneys();
    this.getAllStates();
    this.getAllTypeBilling();
    this.getAllProducts();
    this.getAllProviders();
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



  getAllMoneys() {
    this.aprovalMatrixService.getAllMoney()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.moneys = res.result;

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





  getNameById(nameList: string, id: number) {
    if (!(!!id)) {
      console.log(nameList);
      return;
    }

    switch (nameList) {
      case 'providerid':
        const prov = this.providers.find(p => p.id === id);
        return (!!prov) ? prov.businessName : '';
      case 'billingtype':
        const type = this.typesBilling.find(x => x.id === id);
        return (!!type) ? type.code : '';
      case 'producttype':
        const prod = this.products.find(pro => pro.id === id);
        return (!!prod) ? prod.code : '';
      case 'costcenterid':
        const cost = this.costCenters.find(co => co.id === id);
        return (!!cost) ? cost.name : '';
      case 'moneyid':
        const money = this.moneys.find(mo => mo.id === id);
        return (!!money) ? money.code : '';
      case 'stateid':
        const stat = this.states.find(st => st.id === id);
        return (!!stat) ? stat.name : '';
    }
  }

  getColorById(stateid) {
    const state = this.states.find(st => st.id === stateid);
    return (!!state) ? state.color : 'red';
  }



  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  setAprovalMatrix(row) {
    const dialogRef = this.dialog.open(PupupBillingComponent, {
      height: 'auto',
      width: 'auto',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllBillings();
    });
  }

  addCostCenter() {
    const dialogRef = this.dialog.open(PupupBillingComponent, {
      height: 'auto',
      width: 'auto',
      data: this.billing
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllBillings();
    });
  }


}
