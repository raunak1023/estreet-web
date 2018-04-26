import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { EnergyDashboardComponent } from './energy-dashboard/energy-dashboard.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardBodyComponent } from './dashboard-body/dashboard-body.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { DashboardLineChartComponent } from './dashboard-line-chart/dashboard-line-chart.component';
import { DashboardBarChartComponent } from './dashboard-bar-chart/dashboard-bar-chart.component';
import { DashboardPieChartComponent } from './dashboard-pie-chart/dashboard-pie-chart.component';
import { ChartsDropdownComponent } from './dashboard-body/charts-dropdown/charts-dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    EnergyDashboardComponent,
    DashboardHeaderComponent,
    DashboardBodyComponent,
    DashboardFooterComponent,
    DashboardLineChartComponent,
    DashboardBarChartComponent,
    DashboardPieChartComponent,
    ChartsDropdownComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
