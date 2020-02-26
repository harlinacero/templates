import { Product } from './../../../shared/interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';

import { PopupProductsComponent } from './popup-products/popup-products.component';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  displayedColumns = ['code', 'description', 'type', 'accountingAccount'];

  dataSource: MatTableDataSource<any>;
  products: Product[];
  product: Product;

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
    this.userService.getAllProducts()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.products = res.result;
          this.dataSource = new MatTableDataSource(res.result);
        }
      });
  }

  updateProduct(row) {
    const dialogRef = this.dialog.open(PopupProductsComponent, {
      height: 'auto',
      width: '600px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.getProducts();
    });
  }

  addProduct() {
    const dialogRef = this.dialog.open(PopupProductsComponent, {
      height: 'auto',
      width: '600px',
      data: this.product
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProducts();
    });
  }

}
