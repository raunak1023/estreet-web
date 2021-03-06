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
import { SiprotecDeviceDetailsComponent } from './dashboard-body/siprotec-device-details/siprotec-device-details.component';
import { SiprotecDataComponent } from './dashboard-body/siprotec-data/siprotec-data.component';
import { EnergyTradeComponent } from './dashboard-body/energy-trade/energy-trade.component';
import { GenerationOutageComponent } from './dashboard-body/generation-outage/generation-outage.component';


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
    ChartsDropdownComponent,
    SiprotecDeviceDetailsComponent,
    SiprotecDataComponent,
    EnergyTradeComponent,
    GenerationOutageComponent
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
