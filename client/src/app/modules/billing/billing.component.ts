import { Component, OnInit, ViewChild, AfterViewInit, Provider } from '@angular/core';
import { ServiceBase } from 'src/app/shared/services/service.base';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
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

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit, AfterViewInit {

  displayedColumns = ['numberbilling', 'providerid', 'billingtype', 'producttype', 'costcenterid', 'moneyid', 'exchangerate', 'datebilling', 'datelimit', 'datefiled', 'valuebill', 'stateid'];
  dataSource: MatTableDataSource<any>;
  providers: Providers[] = [];
  billings: Billing[] = [];
  products: Product[] = [];
  costCenters: CostCenter[] = [];
  moneys: Money[] = [];


  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private serviceBase: ServiceBase, private billingService: BillingService, private adminService: AdminService,
    private aprovalMatrixService: AprovalMatrixService, private helper: ControlErrorHelperService) {
    this.getAllProviders();
    this.getAllProducts();
    this.getAllCostCenters();
    this.getAllMoneys();
    this.getAllBillings();
  }

  ngOnInit() {
    this.serviceBase.validateSession();
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

  getAllBillings() {
    this.billingService.GetAllBilling()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.billings = res.result;
          this.dataSource = new MatTableDataSource(res.result);
        } else {
          this.helper.controlErros(res);
        }
      });
  }

  getNameById(nameList: strign, id: number) {
    switch(nameList) {
      case 'providerid':
        const prov = this.providers.find( p => p.id === id);
        const name = (!!prov) ? prov.businessName : '';
        return name;
      // case 'billingtype':
      //   const prov = this.bill.find( p => p.id = id);
      //   const name = (!!prov) ? prov.businessName : '';
      //   return name;
      case 'producttype':
        const prod = this.products.find(pro => pro.id === id);
        const name = (!!prod) ? prod.code: '';
        return name;
      case 'costcenterid':
       
        return name;
      case 'moneyid':
        return name;
      case 'stateid':
        return name;
    }

  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  newBilling() {

  }


}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  const area =
    AREA[Math.round(Math.random() * (AREA.length - 1))];

  const status =
    STATUS[Math.round(Math.random() * (STATUS.length - 1))];
  const indicadores =
    INDICATORS[Math.round(Math.random() * (INDICATORS.length - 1))];



  return {
    id: id.toString(),
    name,
    reference: 'Referencia' + Math.round(Math.random() * 100),
    area,
    dateAprobate: new Date(),
    dateBill: new Date(),
    datePay: new Date(),
    status,
    value: Math.round(Math.random() * 1000),
    indicator: indicadores,
    color: getColor(indicadores)
  };
}

function getColor(indicador: string) {
  switch (indicador) {
    case 'A tiempo':
      return 'green';
    case 'Tarde':
      return 'red';
    case 'Pendiente Tarde':
      return 'orange';
  }
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
const AREA = ['Compras', 'Comercial', 'Tesoreria', 'Administración'];
const STATUS = ['Cancelada', 'Aprobada', 'Pendiente Aprobación', 'Pendiente Pago'];
const INDICATORS = ['A tiempo', 'Tarde', 'Pendiente Tarde'];

export interface UserData {
  id: string;
  name: string;
  reference: string;
  dateBill: Date;
  dateAprobate: Date;
  datePay: Date;
  area: string;
  value: number;
  status: string;
  color: string;
  indicator: string;
}
