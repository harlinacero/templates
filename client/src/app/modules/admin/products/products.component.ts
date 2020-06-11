import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


import { Product } from './../../../shared/interfaces/product.interface';
import { AdminService } from '../../../shared/services/admin.service';
import { PopupProductsComponent } from './popup-products/popup-products.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  displayedColumns = ['code', 'description', 'type', 'accountingAccount'];

  dataSource: MatTableDataSource<any>;
  products: Product[];
  product: Product;
  productType: any[] = [
    { key: 1, value: 'Producto' },
    { key: 2, value: 'Servicio' }
  ];

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
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      } else {
        alert(res.message);
      }
    });
}

getProductType(type) {
  return this.productType.find(p => p.key === type).value;
}

updateProduct(row) {
  const dialogRef = this.dialog.open(PopupProductsComponent, {
    height: 'auto',
    width: 'auto',
    data: row
  });

  dialogRef.afterClosed().subscribe(result => {
    this.getProducts();
  });
}

addProduct() {
  const dialogRef = this.dialog.open(PopupProductsComponent, {
    height: 'auto',
    width: 'auto',
    data: this.product
  });

  dialogRef.afterClosed().subscribe(result => {
    this.getProducts();
  });
}

}
