import { Component, OnInit, ViewChild, ElementRef , AfterViewInit} from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard-pie-chart',
  templateUrl: './dashboard-pie-chart.component.html',
  styleUrls: ['./dashboard-pie-chart.component.css']
})
export class DashboardPieChartComponent implements OnInit, AfterViewInit {

  @ViewChild('pieChartTarget') pieChartTarget: ElementRef;
  chart: Highcharts.ChartObject;

  constructor() { }

  ngOnInit() {
  }

  public ngAfterViewInit() {
    let options: any = {
      title: {
          text: 'Average Current Power Usage'
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
          type: 'pie',
          name: 'Power Usage',
          color: '#000080',
          data: [
            {
              name: 'Jan',
              y: 7.0,
              sliced: true,
              selected: true
            },
            {
              name: 'Feb',
              y: 6.9
            },
            {
              name: 'Mar',
              y: 9.5
            },
            {
              name: 'Apr',
              y: 14.5
            },
            {
              name: 'May',
              y: 18.2
            },
            {
              name: 'Jun',
              y: 21.5
            },
            {
              name: 'Jul',
              y: 25.2
            },
            {
              name: 'Aug',
              y: 26.5
            },
            {
              name: 'Sep',
              y: 23.3
            },
            {
              name: 'Oct',
              y: 18.3
            },
            {
              name: 'Nov',
              y: 13.9
            },
            {
              name: 'Dec',
              y: 9.6
            }
          ]
      }]
    };
    this.chart = chart(this.pieChartTarget.nativeElement, options);
  }
}
