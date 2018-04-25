import { Component, OnInit, ViewChild, ElementRef , AfterViewInit} from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-dashboard-line-chart',
  providers: [ ConfigService ],
  templateUrl: './dashboard-line-chart.component.html',
  styleUrls: ['./dashboard-line-chart.component.css']
})
export class DashboardLineChartComponent implements OnInit, AfterViewInit {

  @ViewChild('lineChartTarget') lineChartTarget: ElementRef;
  chart: Highcharts.ChartObject;
  getPastPowerUsageConfig;
  PastPowerUsage;

  constructor(configService : ConfigService) {
    this.getPastPowerUsageConfig = configService.getConfig() + '/getPastPowerUsageConfig';
   }

  ngOnInit() {
  }

  showConfig() {
    this.getPastPowerUsageConfig
      .subscribe(data => this.PastPowerUsage = {
        months: data['monthsList'],
        usage:  data['dataList']
    });
  }

  public ngAfterViewInit() {
    
    let options: any = {
      title: {
          text: 'Average Power Usage'
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
          data: [
              7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,
              26.5, 23.3, 18.3, 13.9, 9.6
          ]
      }]
    };
    this.chart = chart(this.lineChartTarget.nativeElement, options);
  }

}
