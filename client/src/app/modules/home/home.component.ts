import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceBase } from 'src/app/shared/services/service.base';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js';
import { HomeService } from 'src/app/shared/services/home.service';
import { vw_totalBilling, Vw_total_billing_by_month } from 'src/app/shared/interfaces/vw_totalBilling.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  chart: any;
  chart2: any;
  indicators: vw_totalBilling[];
  billingsByMonth: Vw_total_billing_by_month[];
  /**
 * Interval to update the chart
 * @var {any} intervalUpdate
 */
  intervalUpdate: any = null;

  constructor(private serviceBase: ServiceBase, private homeService: HomeService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.serviceBase.validateSession('/home');
    this.getIndicators();
    // this.router.navigate(['billing']);
    this.showData();
    this.getAllBillingsByStatus();

  }


  getIndicators() {
    this.homeService.getAllIndicators().subscribe(res => {
      if (res.isSuccesfull) {
        this.indicators = res.result;
      } else {
        console.log(res);
      }
    });
  }

  showData(): void {
    this.homeService.getAllBillingsByMonth().subscribe(res => {
      if (res.isSuccesfull) {
        this.billingsByMonth = res.result;
        let data = this.billingsByMonth.map(m => { return m.total });
        let labels = this.billingsByMonth.map(m => { return m.month });
        this.buildChart('chart', 'bar', data, labels, 'Facturación diaria');
      } else {
        console.log(res);
      }
    });
  }

  getAllBillingsByStatus() {
    this.homeService.getAllBillingsByStatus().subscribe(res => {
      if (res.isSuccesfull) {
        res.result;
        let data = res.result.map(m => { return m.numer });
        let data2 = res.result.map(m => { return m.estadoaprobacion });
        let labels = res.result.map(m => { return m.costcenter });
        this.buildChart('chart2', 'doughnut', data, labels, 'Facturas por Centro de Costo', data2, true);
        // this.customBar();
      } else {
        console.log(res);
      }
    });
  }

  buildChart(idChart, style, data, labels, title, data2?, backgroundColor?: boolean) {
    this.chart = new Chart(idChart, {
      type: style,
      data: {
        labels: labels,
        datasets: [{
          label: '# de Facturas',
          data: data,
          backgroundColor: (backgroundColor) ?
            this.getColors(data)
            : 'rgba(54, 162, 235, 0.8)',
          // borderColor: (backgroundColor) ? 'rgba(54, 162, 235, 1)' : '',
          borderWidth: 1
        }]
      },
      options: {
        title: {
          display: true,
          text: title
        },
        legend: {
          position: 'top',
          align: 'end'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stacked: true
            }
          }]
        }
      }
    });
  }
  getColors(data: any) {
    return ['rgba(54, 162, 235, 0.8)',
      'rgba(54, 162, 0, 0.8)',
      'rgba(54, 16, 165, 0.8)'];
  }


  customBar() {
    this.chart = new Chart('chart2', {
      type: 'line',
      data: [20, 10],
      options: {
        spanGaps: true
      }
    });
  }
  /**
* Get the data from the API
* @function getFromAPI
* @return {Observable<any>}
*/

  ngOnDestroy(): void {
    clearInterval(this.intervalUpdate);
  }

}
