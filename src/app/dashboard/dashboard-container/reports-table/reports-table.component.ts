import { Component, OnInit } from '@angular/core';
import {ReportService} from "../../service/report.service";

@Component({
  selector: 'app-reports-table',
  templateUrl: './reports-table.component.html',
  styleUrls: ['./reports-table.component.css']
})
export class ReportsTableComponent implements OnInit {

  public reports = [];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.getAllReports();
  }

  // DATA SERVICE
  getAllReports() {
    this.reportService.getAll()
      .subscribe(reports => this.reports = reports, error => {
        console.log(error);
      });
  }

}
