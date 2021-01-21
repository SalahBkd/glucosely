import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions} from "chart.js";
import {Color, Label} from "ng2-charts";

@Component({
  selector: 'app-stats-chart',
  templateUrl: './stats-chart.component.html',
  styleUrls: ['./stats-chart.component.css']
})
export class StatsChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [0.2, 0.97, 1.00, 1.23, 1.17, 1.21, 1.094, 1.0895, 1.034, 1.087], label: 'Series A' },
  ];
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

  constructor() { }

  ngOnInit() {
  }

}
