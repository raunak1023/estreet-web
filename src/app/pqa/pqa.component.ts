import { Component, OnInit } from '@angular/core';
import { Pqa } from '../class/pqa';

@Component({
  selector: 'app-pqa',
  templateUrl: './pqa.component.html',
  styleUrls: ['./pqa.component.css']
})
export class PqaComponent implements OnInit {
  
  pqa : Pqa = {
	voltage: 220,
	current: 2,
	power: 440
  };
  
  constructor() { }

  ngOnInit() {
		 
  }

}
