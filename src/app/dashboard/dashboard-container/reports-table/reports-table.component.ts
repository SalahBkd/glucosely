import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ReportService} from "../../service/report.service";
import {Report} from "../../model/Report";
import {FormControl, FormGroup} from "@angular/forms";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reports-table',
  templateUrl: './reports-table.component.html',
  styleUrls: ['./reports-table.component.css']
})
export class ReportsTableComponent {

  @Input() public reports = [];
  @Output() public refresh = new EventEmitter();
  public showUpdateFormPopup = false;
  public form: FormGroup = null;

  constructor(private reportService: ReportService, private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  // UI
  handlUpdate(report: Report) {
    this.toggleUpdateIcon();
    const myDate = parseInt(report.creationDate) * 1000;
    const datePipeString = this.datePipe.transform(myDate.toString(),'dd/MM/yyyy');

    this.form = new FormGroup({
      id: new FormControl(report.id),
      valeur: new FormControl(report.valeur),
      creationDate: new FormControl(datePipeString)
    });
  }

  // FORM
  onSubmit(report) {
    let newDate = new Date(report.creationDate).getTime() / 1000;
    let newValeur = parseInt(report.valeur);

    let newReport = {
      id: report.id,
      valeur: newValeur,
      creationDate: newDate.toString()
    }
    this.updateReport(newReport);
    this.showUpdateFormPopup = false;
    this.form.reset();
    this.refresh.emit();
  }


  // DATA SERVICE
  updateReport(report) {
    this.reportService.update(report)
      .subscribe(error => console.log(error));
  }


  // UTILS
  private toggleUpdateIcon() {
    this.showUpdateFormPopup = !this.showUpdateFormPopup;
  }
}
