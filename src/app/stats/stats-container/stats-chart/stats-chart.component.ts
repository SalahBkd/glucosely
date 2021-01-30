import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions} from "chart.js";
import {Color, Label} from "ng2-charts";
import {ReportService} from "../../../dashboard/service/report.service";

@Component({
  selector: 'app-stats-chart',
  templateUrl: './stats-chart.component.html',
  styleUrls: ['./stats-chart.component.css']
})
export class StatsChartComponent implements OnInit {

  private reports = [];

  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = ['janvier', 'mai', 'septembre', 'février', 'juin', 'octobre', 'mars', 'juillet', 'novembre', 'avril', 'aout', 'décembre'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    annotation: undefined
    //responsive: true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0,34,255,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private reportService: ReportService) {
  }

  ngOnInit() {
    this.reportService.getAll()
      .subscribe(
        reports => this.reports = reports,
        error =>  console.log(error),
        () => this.setChartData()
      );
  }

  setChartData() {
    /*let index = 20;
    let tempSum = 0;
    let temptReportsLength = 0;
    let moyennes = [];
    let moyenne = 0;

    // calculate moyenne and push it to moyennes array
    for (let i = 0; i < index; i++) {
      if(!this.reports[i])
        break;

      tempSum += this.reports[i].valeur;
      temptReportsLength++;

      if(i + 1 === index) {
        moyenne = tempSum / temptReportsLength;
        moyennes.push(moyenne);
        moyenne = 0;
        tempSum = 0;
        temptReportsLength = 0;
        index += 20;
      }
    }*/

    this.lineChartData = [
      { data: [0.45, 0.53, 0.87, 0.44, 0.87, 0.70, 0.50, 0.66], label: 'Series A' },
    ];
  }
}
