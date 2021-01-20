import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ReportService} from "../../service/report.service";

@Component({
  selector: 'app-reports-table',
  templateUrl: './reports-table.component.html',
  styleUrls: ['./reports-table.component.css']
})
export class ReportsTableComponent {

  @Input() public reports = [];
  @Output() public refresh = new EventEmitter();

}
