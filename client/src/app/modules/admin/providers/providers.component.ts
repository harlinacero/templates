import { PopupProviderComponent } from './popup-provider/popup-provider.component';
import { Component, OnInit, Provider, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { AdminService } from '../../../shared/services/admin.service';
import { Providers } from 'src/app/shared/interfaces/providers.interface';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  displayedColumns = ['code', 'businessName', 'nit', 'regimenType', 'economyActivity', 'contact', 'address', 'email'];

  dataSource: MatTableDataSource<any>;
  providers: Providers[];
  provider: Providers;

  constructor(private userService: AdminService, public dialog: MatDialog) {
    this.getProviders();
  }


  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getProviders() {
    this.userService.getAllProviders()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.providers = res.result;
          this.dataSource = new MatTableDataSource(res.result);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      });
  }

  updateProvider(row) {
    const dialogRef = this.dialog.open(PopupProviderComponent, {
      height: 'auto',
      width: 'auto',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProviders();
    });
  }

  addProvider() {
    const dialogRef = this.dialog.open(PopupProviderComponent, {
      height: 'auto',
      width: 'auto',
      data: this.provider
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProviders();
    });
  }

}
