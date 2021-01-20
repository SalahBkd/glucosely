import {Component, OnInit, Output} from '@angular/core';
import {ReportService} from "../../service/report.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {

  public showAddFormPopup = false;
  public form: FormGroup;
  @Output() public refresh = new EventEmitter();

  constructor(private reportService: ReportService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      valeur: new FormControl(''),
      creationDate: new FormControl('')
    });
  }

  // UI
  toggleAddIcon() {
    this.showAddFormPopup = !this.showAddFormPopup;
  }

  // FORM
  onSubmit(report) {
    let newDate = new Date(report.creationDate).getTime() / 1000;
    let newValeur = parseInt(report.valeur);

    let newReport = {
      valeur: newValeur,
      creationDate: newDate.toString()
    }
    this.addReport(newReport);
    this.showAddFormPopup = false;
    this.form.reset();
    this.refresh.emit();
  }


  // DATA SERVICE
  addReport(report) {
    this.reportService.add(report)
      .subscribe(error => console.log(error));
  }

}
