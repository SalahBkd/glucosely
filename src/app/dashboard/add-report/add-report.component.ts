import { Component, OnInit } from '@angular/core';
import {ReportService} from "../service/report.service";

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {

  public showAddFormPopup = false;

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
  }

  // UI
  onAddIconClick() {
    this.showAddFormPopup = true;
  }

  onCloseAddFormPopup() {
    this.showAddFormPopup = false;
  }

  // DATA SERVICE
  

}
