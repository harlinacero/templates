import { Product } from './../../../../shared/interfaces/product.interface';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '../../../../shared/services/admin.service';

@Component({
  selector: 'app-popup-products',
  templateUrl: './popup-products.component.html',
  styleUrls: ['./popup-products.component.scss']
})
export class PopupProductsComponent implements OnInit {
  title = 'Agregar Producto';
  data: Product;
  productType: any[] = [
    { key: 1, value: 'Producto' },
    { key: 2, value: 'Servicio' }
  ];

  constructor(public dialogRef: MatDialogRef<PopupProductsComponent>,
              @Inject(MAT_DIALOG_DATA) public product: Product, private userService: AdminService) {
    this.data = product;

    if (this.data.id > 0) {
      this.title = 'Modificar Producto';
    }

  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.userService.saveProduct(this.data).subscribe(res => {
      if (res.isSuccesfull) {
        alert('Producto actualizado');
      }
    });
  }

}
