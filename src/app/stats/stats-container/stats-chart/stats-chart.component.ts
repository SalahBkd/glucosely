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
  private chartData;

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
    // input: at least array of 40 reports
    // output: array of chart data that have at least 2 values [10.8, 11.7]

    // will be at least 40 reports
      // loop through each 20 values and calculate MOYENNE
      // add MOYENNE to a a new array
    // iterate again

    this.lineChartData = [
      { data: [10.8, 11.7], label: 'Series A' },
    ];
  }
}
