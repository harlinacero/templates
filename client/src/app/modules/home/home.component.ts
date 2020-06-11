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
        // this.chart.data.labels.push(this.billingsByMonth.map(m => { return m.month }));
        // this.chart.data.datasets[0].data.push(this.billingsByMonth.map(m => { return m.total }));
        // this.chart.update();
        let data = this.billingsByMonth.map(m => { return m.total });
        let labels = this.billingsByMonth.map(m => { return m.month });
        this.buildChart(data, labels);
      } else {
        console.log(res);
      }
    });
  }

  buildChart(data, labels) {
    this.chart = new Chart('chart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: '# de Facturas',
          data: data,
          backgroundColor: 'rgba(54, 162, 235, 0.8)',
          // [
          //   'rgba(255, 99, 132, 0.8)',
          //   'rgba(54, 162, 235, 0.8)',
          //   'rgba(255, 206, 86, 0.)',
          //   'rgba(75, 192, 192, 0.2)',
          //   'rgba(153, 102, 255, 0.2)',
          //   'rgba(255, 159, 64, 0.2)'
          // ],
          borderColor: 'rgba(54, 162, 235, 1)',
          // [
          //   'rgba(255, 99, 132, 1)',
          //   'rgba(54, 162, 235, 1)',
          //   'rgba(255, 206, 86, 1)',
          //   'rgba(75, 192, 192, 1)',
          //   'rgba(153, 102, 255, 1)',
          //   'rgba(255, 159, 64, 1)'
          // ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          position: 'top',
          align: 'end'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
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
