import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { GenerateReportComponent } from './dashboard/generate-report/generate-report.component';
import { ReportsTableComponent } from './dashboard/reports-table/reports-table.component';
import { StatsContainerComponent } from './stats/stats-container/stats-container.component';
import { StatsChartComponent } from './stats/stats-container/stats-chart/stats-chart.component';
import {AddReportComponent} from "./dashboard/add-report/add-report.component";
import { DashboardContainerComponent } from './dashboard/dashboard-container/dashboard-container.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {routing} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AddReportComponent,
    GenerateReportComponent,
    ReportsTableComponent,
    StatsContainerComponent,
    StatsChartComponent,
    DashboardContainerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
