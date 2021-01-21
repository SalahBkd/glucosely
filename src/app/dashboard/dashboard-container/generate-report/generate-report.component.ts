import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {

  @Input() public reports = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleGenerate() {
    if(this.reports.length >= 3) {
      this.router.navigate(['/stats']);
    }
  }

}
