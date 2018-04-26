import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-dashboard-line-chart',
  providers: [ ConfigService ],
  templateUrl: './dashboard-line-chart.component.html',
  styleUrls: ['./dashboard-line-chart.component.css']
})
export class DashboardLineChartComponent implements OnInit {

  @ViewChild('lineChartTarget') lineChartTarget: ElementRef;
  chart: Highcharts.ChartObject;
  getPastPowerUsageConfig;
  PastPowerUsage;

  constructor(configService : ConfigService) {
    this.getPastPowerUsageConfig = configService.getConfig();
   }

  ngOnInit() {
    this.showConfig();
  }

  showConfig() {
    this.getPastPowerUsageConfig
      .subscribe(data => this.loadLineChart(data));
  }

  public loadLineChart(data) {
    let options: any = {
      title: {
          text: 'Average Power Usage'
      },
      xAxis: {
          categories: data['months']
      },
      yAxis: {
        gridLineColor: '#87ceeb',
        title: {
          text: 'Usage in KWH'
        }
      },
      chart : {
        backgroundColor:'transparent',
        style: {
          'position': 'absolute'
        }
      },
      series: [{
          type: 'line',
          name: 'Power Usage',
          color: '#000080',
          data: data['powerUsage']
      }]
    };
    this.chart = chart(this.lineChartTarget.nativeElement, options);
  }

}
