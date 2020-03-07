import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Billing } from 'src/app/shared/interfaces/billing.interface';
import { ServiceBase } from 'src/app/shared/services/service.base';
import { BillingService } from 'src/app/shared/services/billing.service';
import { AdminService } from 'src/app/shared/services/admin.service';
import { Providers } from 'src/app/shared/interfaces/providers.interface';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { CostCenter } from 'src/app/shared/interfaces/costCenter.interface';
import { Money } from 'src/app/shared/interfaces/money.interface';
import { Status } from 'src/app/shared/interfaces/status.interface';
import { ControlErrorHelperService } from 'src/app/shared/helpers/controlError.helper';
import { AprovalMatrixService } from 'src/app/shared/services/aprovalMatrix.service';

@Component({
  selector: 'app-pupup-billing',
  templateUrl: './pupup-billing.component.html',
  styleUrls: ['./pupup-billing.component.scss']
})
export class PupupBillingComponent implements OnInit {

  title = 'Agregar Factura';
  data: Billing;
  providers: Providers[] = [];
  products: Product[] = [];
  costCenters: CostCenter[] = [];
  moneys: Money[] = [];
  states: Status[] = [];

  constructor(public dialogRef: MatDialogRef<PupupBillingComponent>,
    // tslint:disable-next-line: align
    @Inject(MAT_DIALOG_DATA) public bill: Billing, private helper: ControlErrorHelperService,
    // tslint:disable-next-line: align
    private aprovalMatrixService: AprovalMatrixService,
    // tslint:disable-next-line: align
    private serviceBase: ServiceBase, private billingService: BillingService, private adminService: AdminService) {
    this.data = bill;
    this.getAllProviders();
    this.getAllProducts();
    this.getAllCostCenters();
    this.getAllMoneys();
    this.getAllStates();

    if (this.bill.id > 0) {
      this.title = 'Modificar Factura';
    }

  }

  ngOnInit() {

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

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.billingService.SaveBilling(this.data).subscribe(res => {
      if (res.isSuccesfull) {
        alert('Factura actualizado');
      }
    });
  }

}
