import { PopupProviderComponent } from './popup-provider/popup-provider.component';
import { Component, OnInit, Provider } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';

import { AdminService } from '../../../shared/services/admin.service';
import { Providers } from 'src/app/shared/interfaces/providers.interface';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {

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
        }
      });
  }

  updateProvider(row) {
    const dialogRef = this.dialog.open(PopupProviderComponent, {
      height: 'auto',
      width: '600px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.getProviders();
    });
  }

  addProvider() {
    const dialogRef = this.dialog.open(PopupProviderComponent, {
      height: 'auto',
      width: '600px',
      data: this.provider
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProviders();
    });
  }

}
