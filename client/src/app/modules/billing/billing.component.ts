import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ServiceBase } from 'src/app/shared/services/service.base';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit, AfterViewInit {
  displayedColumns = ['id', 'name', 'reference', 'dateBill', 'dateAprobate', 'datePay', 'area', 'value', 'status', 'indicator'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private serviceBase: ServiceBase) {

    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);

  }

  ngOnInit() {
    this.serviceBase.validateSession();
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
