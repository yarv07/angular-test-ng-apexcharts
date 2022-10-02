import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: "app-chart-books",
  templateUrl: "./chart-books.component.html",
  styleUrls: ["./chart-books.component.css"]
})
export class ChartBooksComponent {
  @ViewChild("chart")
  chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {data: [16, 30, 31, 30, 31, 31, 30, 1]}
      ],
      chart: {
        height: 550,
        width: "100%",
        type: "bar"
      },
      title: {
        text: "Books"
      },
      xaxis: {
        categories: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
      }
    }
  };
}
