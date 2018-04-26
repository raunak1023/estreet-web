import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-dropdown',
  templateUrl: './charts-dropdown.component.html',
  styleUrls: ['./charts-dropdown.component.css']
})
export class ChartsDropdownComponent implements OnInit {

  levels: string[] = ["Energy purchased", "Energy sold", "Energy loss", "Average monthly, yearly", "Total Profit", "Total loss"];
  selectedLevel: string;

  constructor() { }

  ngOnInit() {
    this.selectedLevel = 'Energy purchased';
  }

  ChangeLevel(level) {
    this.selectedLevel = level;
  }

}
