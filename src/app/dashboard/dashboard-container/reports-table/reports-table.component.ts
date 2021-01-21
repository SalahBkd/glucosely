import {Component, Input} from '@angular/core';
import {ReportService} from "../../service/report.service";
import {Report} from "../../model/Report";
import {FormControl, FormGroup} from "@angular/forms";
import { DatePipe } from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reports-table',
  templateUrl: './reports-table.component.html',
  styleUrls: ['./reports-table.component.css']
})
export class ReportsTableComponent {

  @Input() public reports = [];
  public showUpdateFormPopup = false;
  public form: FormGroup = null;
  public showDeletePopup = false;

  constructor(private reportService: ReportService, private datePipe: DatePipe, private router: Router) { }

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

  handleDelete(report: Report) {
    this.toggleDeletePopup();
  }

  toggleDeletePopup() {
    this.showDeletePopup = !this.showDeletePopup;
  }

  handleDeleteConfirm(report: Report) {
    this.deleteReport(report);
    this.toggleDeletePopup();
  }

  handleDeleteCancel() {
    this.toggleDeletePopup();
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

  }

  // DATA SERVICE
  updateReport(report) {
    this.reportService.update(report)
      .subscribe(
        value => console.log(value),
        error => console.log(error),
        () =>
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/dashboard'])
          })
      );
  }

  deleteReport(report) {
    this.reportService.delete(report)
      .subscribe(
        value => console.log(value),
        error => console.log(error),
        () =>
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/dashboard'])
          })
      );
  }

  // UTILS
  private toggleUpdateIcon() {
    this.showUpdateFormPopup = !this.showUpdateFormPopup;
  }
}
