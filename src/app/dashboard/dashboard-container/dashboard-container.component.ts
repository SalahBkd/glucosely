import { Component, OnInit } from '@angular/core';
import {ReportService} from "../service/report.service";

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent implements OnInit {

  public reports = [];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.getAllReports();
  }

  // DATA SERVICE
  public getAllReports() {
    this.reportService.getAll()
      .subscribe(reports => this.reports = reports, error => {
        console.log(error);
      });
  }

  public refreshReports() {
    this.reportService.getAll()
      .subscribe(reports => this.reports = reports, error => {
        console.log(error);
      });
  }

}
