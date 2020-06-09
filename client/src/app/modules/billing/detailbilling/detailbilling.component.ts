import { ServiceBase } from './../../../shared/services/service.base';
import { StatusBillingEnum } from './../../../shared/enums/statesBilling.enum';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs';
import { BillingService } from 'src/app/shared/services/billing.service';
import { vw_billing_data } from 'src/app/shared/interfaces/vw_billing_data.interface';

@Component({
  selector: 'app-detailbilling',
  templateUrl: './detailbilling.component.html',
  styleUrls: ['./detailbilling.component.scss']
})
export class DetailbillingComponent implements OnInit {
  displayedColumns = ['levelaproval', 'aprovalperson', 'dateRequest', 'dateResponse', 'acordingDays', 'executiondays', 'indicator', 'comments'];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  subscription: Subscription = new Subscription();
  detailBillingSubscription: Subscription = new Subscription();
  numberBilling = "";
  detailBilling: vw_billing_data[];
  title: string;
  isRequestAvailable = false;
  dataSource: MatTableDataSource<any>;
  observations = "";

  constructor( @Inject(MAT_DIALOG_DATA)  public dialogRef: MatDialogRef<DetailbillingComponent>,private serviceBase: ServiceBase, private billingService: BillingService, private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.serviceBase.validateSession('/billing');
    this.numberBilling = this.route.snapshot.paramMap.get('id');
    this.getDetailBilling(parseInt(this.numberBilling));
  }


  getDetailBilling(numberBilling: number) {
    this.detailBillingSubscription = this.billingService.GetDetailBilling(numberBilling)
      .subscribe(res => {
        if (res.isSuccesfull) {
          this.detailBilling = res.result;
          this.dataSource = new MatTableDataSource(res.result);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.title = 'Detalle Factura Nro.: ' + this.detailBilling[0].numeroFactura;
          this.validateIfCanAproval(this.detailBilling);
        } else {

        }
      });
  }


  validateIfCanAproval(detailBilling: vw_billing_data[]) {
    for (const iterator of detailBilling) {
      if (iterator.personAprovalId === this.serviceBase.session.person.id) {
        if (iterator.estadoFacturaId === StatusBillingEnum.ATiempo) {
          this.isRequestAvailable = true;
        }
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.detailBillingSubscription.unsubscribe();
  }

  return() {
    this.router.navigate(['billing']);
  }

  regectBilling() {
    const textAtrea = (document.getElementById('rejectionCause') as HTMLInputElement).value;
    if (!!textAtrea) {
      this.billingService.ContinueAprovalProcess(this.numberBilling, StatusBillingEnum.Rechazada, textAtrea).subscribe(res => {
        if (res.isSuccesfull) {
          alert(res.result);
          this.getDetailBilling(parseInt(this.numberBilling));
          location.reload();
        } else {
          console.log(res);
        }
      });

    }

  }


  aprovalBilling() {
    const textAtrea = (document.getElementById('message-text') as HTMLInputElement).value;
    if (!!textAtrea)
      this.observations = textAtrea;
    if (!!this.observations) {
      this.billingService.ContinueAprovalProcess(this.numberBilling, StatusBillingEnum.Aprobada, this.observations).subscribe(res => {
        if (res.isSuccesfull) {
          alert(res.result);
          this.getDetailBilling(parseInt(this.numberBilling));
          location.reload();
        } else {
          console.log(res);
        }
      });

    }
  }
}
