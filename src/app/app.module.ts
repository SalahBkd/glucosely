import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { GenerateReportComponent } from './dashboard/dashboard-container/generate-report/generate-report.component';
import { ReportsTableComponent } from './dashboard/dashboard-container/reports-table/reports-table.component';
import { StatsContainerComponent } from './stats/stats-container/stats-container.component';
import { StatsChartComponent } from './stats/stats-container/stats-chart/stats-chart.component';
import {AddReportComponent} from "./dashboard/dashboard-container/add-report/add-report.component";
import { DashboardContainerComponent } from './dashboard/dashboard-container/dashboard-container.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {routing} from "./app.routing";
import { AboutComponent } from './layout/about/about.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {ChartsModule} from "ng2-charts";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import {AuthService} from "./auth/service/AuthService";
import { UserProfileComponent } from './layout/user-profile/user-profile.component';

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
    NotFoundComponent,
    AboutComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [DatePipe, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
