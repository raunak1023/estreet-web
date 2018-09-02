import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-dropdown',
  templateUrl: './charts-dropdown.component.html',
  styleUrls: ['./charts-dropdown.component.css']
})
export class ChartsDropdownComponent implements OnInit {

  levels: string[] = ["Energy purchased", "Energy sold", "Energy loss", "Average monthly, yearly", "Total Profit", "Total loss"];
  selectedLevel: string;
  chartType: string;

  constructor() { }

  ngOnInit() {
    this.selectedLevel = 'Energy purchased';
    this.chartType = 'line';
  }

  ChangeLevel(level) {
    this.selectedLevel = level;
  }

  changeCharType(type) {
    this.chartType = type;
  }

}
