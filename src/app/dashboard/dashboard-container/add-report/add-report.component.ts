import {Component, OnInit} from '@angular/core';
import {ReportService} from "../../service/report.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {

  public showAddFormPopup = false;
  public form: FormGroup;

  constructor(private reportService: ReportService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      valeur: new FormControl(''),
    });
  }

  // UI
  toggleAddIcon() {
    this.showAddFormPopup = !this.showAddFormPopup;
  }

  // FORM
  onSubmit(report) {
    let newDate = new Date().getTime() / 1000;
    let newValeur = parseInt(report.valeur);
    let newReport = {
      valeur: newValeur,
      creationDate: newDate.toString()
    }
    this.addReport(newReport);
    this.showAddFormPopup = false;
    this.form.reset();
  }


  // DATA SERVICE
  addReport(report) {
    this.reportService.add(report)
      .subscribe(
        value => console.log(''),
        error => console.log(error),
        () =>
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/dashboard'])
          }));
  }

}
