import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { HttpEventType, HttpErrorResponse, HttpClient } from '@angular/common/http';
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
import { TypeBilling } from 'src/app/shared/interfaces/typeBilling.interface';
import { StatusBillingEnum } from 'src/app/shared/enums/statesBilling.enum';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FileValidator } from 'ngx-material-file-input';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AprovalMatrix } from 'src/app/shared/interfaces/aprovalMatrix.interface';
import { ArraySortPipe } from './../../../shared/pipes/arraySort.pipe';

@Component({
  selector: 'app-pupup-billing',
  templateUrl: './pupup-billing.component.html',
  styleUrls: ['./pupup-billing.component.scss']
})
export class PupupBillingComponent implements OnInit {
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  files = [];

  title = 'Agregar Factura';
  data: Billing;
  providers: Providers[] = [];
  products: Product[] = [];
  costCenters: CostCenter[] = [];
  moneys: Money[] = [];
  states: Status[] = [];
  typesBilling: TypeBilling[];
  fileValues: File;
  disabled = false;
  isVisible = false;
  aprovalMatrices: AprovalMatrix[] = [];
  canCreate = false;

  constructor(public dialogRef: MatDialogRef<PupupBillingComponent>,
    // tslint:disable-next-line: align
    @Inject(MAT_DIALOG_DATA) public bill: Billing, private helper: ControlErrorHelperService,
    // tslint:disable-next-line: align
    private aprovalMatrixService: AprovalMatrixService,
    // tslint:disable-next-line: align
    private serviceBase: ServiceBase, private billingService: BillingService, private adminService: AdminService,
    // tslint:disable-next-line: align
    private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.data = bill;
    dialogRef.disableClose = true;
    this.getAllProviders();
    this.getAllProducts();
    this.getAllCostCenters();
    this.getAllTypeBilling();
    this.getAllMoneys();
    this.getAllStates();
    this.getAllAprovalMatrix();

    if (this.data.id > 0) {
      this.title = 'Modificar Factura';
      this.disabled = true; // cambiar
      this.isVisible = (this.data.stateid === StatusBillingEnum.Rechazada) ? true : false;

    } else {
      this.disabled = false;
      this.setFieldsVisible(this.data.stateid);
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

  getAllAprovalMatrix() {
    this.aprovalMatrixService.GetAllAprovalMatrix()
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.aprovalMatrices = res.result;
        }
      });
  }

  setFieldsVisible(event) {
    if (event === StatusBillingEnum.Rechazada) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

  validateCostCenter(costcenterId) {
    const aprovals = this.aprovalMatrices.find(ap => {
      if (ap.costCenterId === costcenterId) {
        return ap;
      }
    });
    if (!!aprovals) {
      this.canCreate = true;
    } else {
      alert('El centro de costo no tiene matriz de aprobación');
      this.canCreate = false;
      return;
    }
  }




  onNoClick(): void {
    this.dialogRef.close();
  }



  onFileSelected() {
    const inputNode = document.querySelector('#file') as HTMLInputElement;
    const label = document.getElementById('labelFile');
    if (inputNode.files.length > 0) {
      this.fileValues = inputNode.files[0];
      label.innerText = this.fileValues.name;
    } else {
      label.innerText = '';
    }

  }

  validateForm() {
    this.canCreate = true;

    if (!(!!this.data.numberBilling)) {
      this.canCreate = false;
    }
    if (!(!!this.data.billingType)) {
      this.canCreate = false;
    }
    if (!(!!this.data.providerId)) {
      this.canCreate = false;
    }
    if (!(!!this.data.productType)) {
      this.canCreate = false;
    }
    if (!(!!this.data.costcenterId)) {
      this.canCreate = false;
    }
    // if (!(!!this.data.moneyId)) {
    //   this.canCreate = false;
    // }
    if (!(!!this.data.valueBill && this.data.valueBill > 0)) {
      this.canCreate = false;
    }
    if (!(!!this.data.exchangeRate && this.data.exchangeRate > 0)) {
      this.canCreate = false;
    }
    if (!(!!this.data.dateBilling)) {
      this.canCreate = false;
    }
    if (!(!!this.data.dateFiled)) {
      this.canCreate = false;
    }
    if (!(!!this.data.dateLimit)) {
      this.canCreate = false;
    }
    if (!(!!this.fileValues)) {
      this.canCreate = false;
    }

    this.validateMaxValue(this.data.costcenterId, this.data.valueBill);

    if (this.canCreate) {
      this.save();
    } else {
      alert('Valide nuevamente los datos');
      this.dialogRef.disableClose = false;
    }
  }

  validateMaxValue(costcenterId: any, valueBill: number) {
    let currentmatrix = [];
    for (const matrix of this.aprovalMatrices) {
      if (matrix.costCenterId === costcenterId) {
        currentmatrix.push(matrix);
      }
    }

    if (currentmatrix.length > 0) {
      const sorts = new ArraySortPipe();
      const matrixOrder = sorts.transform(currentmatrix, 'levelAprobation');
      const level: AprovalMatrix = matrixOrder[currentmatrix.length - 1];
      if (!!level) {
        if (level.valueMax < valueBill) {
          alert('El valor máximo permitido para el centro el centro de costo seleccionado es ' + level.valueMax);
          this.canCreate = false;
        }
      }

    } else {
      alert('El centro de costo no tiene matriz de aprobación');
    }
  }

  save() {

    this.data.stateid = (!!this.data.id || this.data.id === 0) ? this.data.stateid : StatusBillingEnum['En Proceso Aprobación'];
    this.billingService.SaveBilling(this.data, this.fileValues).subscribe(res => {
      if (res.isSuccesfull) {
        alert('Se ha modificado la factura');
      } else {
        this.helper.controlErros(res);
      }
    });
  }








  // getBilling() {

  //   const stateId = (!!this.data.id || this.data.id === 0) ? this.data.id : StatusBillingEnum['En Proceso Aprobación'];

  //   const billing: Billing = {
  //     billingtype: this.data.billingtype,
  //     casuerejection: this.data.casuerejection,
  //     costcenterid: this.data.costcenterid,
  //     dateaprovalrejection: this.data.dateaprovalrejection,
  //     datebilling: this.data.datebilling,
  //     datecreated: this.data.datecreated,
  //     datefiled: this.data.datefiled,
  //     datelimit: this.data.datelimit,
  //     exchangerate: this.data.exchangerate,
  //     moneyid: this.data.moneyid,
  //     numberbilling: this.data.numberbilling,
  //     producttype: this.data.producttype,
  //     providerid: this.data.providerid,
  //     routefile: this.data.routefile,
  //     stateid: stateId,
  //     userchange: this.data.userchange,
  //     userrejection: this.data.userrejection,
  //     valuebill: this.data.valuebill,
  //     id: this.data.id
  //   };

  //   return billing;

  // }

}
