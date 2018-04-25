import { Component, OnInit, ViewChild, ElementRef , AfterViewInit} from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard-bar-chart',
  templateUrl: './dashboard-bar-chart.component.html',
  styleUrls: ['./dashboard-bar-chart.component.css']
})
export class DashboardBarChartComponent implements OnInit, AfterViewInit {

  @ViewChild('barChartTarget') barChartTarget: ElementRef;
  chart: Highcharts.ChartObject;

  constructor() { }

  ngOnInit() {
  }

  public ngAfterViewInit() {
    let options: any = {
      title: {
          text: 'Average Forecasted Power Usage'
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
          type: 'column',
          name: 'Power Usage',
          color: '#44d43b',
          data: [
              7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,
              26.5, 23.3, 18.3, 13.9, 9.6
          ]
      }]
    };
    this.chart = chart(this.barChartTarget.nativeElement, options);
  }
}
