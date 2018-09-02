import { Component, OnInit } from '@angular/core';
import { STATES } from './mock-states';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-energy-trade',
  templateUrl: './energy-trade.component.html',
  styleUrls: ['./energy-trade.component.css']
})
export class EnergyTradeComponent implements OnInit {
  closeResult: string;
  states = STATES;
  StatesDouble = [];
  selectedVal = 'Buy';
  modalProduct = '';
  priceType = 'Current';
  modalPrice = 0;
  modalQuantity = 0;
  priceVal = '';

  constructor(public modalService: NgbModal) {  
    let count=0;
    let count1=0;
    for(let i=0;i<this.states.length;i=i+5) {
      this.StatesDouble[count] = new Array();
      for(let col of [1,2,3,4,5]) {
        this.StatesDouble[count].push(this.states[count1++]);
      }
      count++;
    }
  }

  setPrice(val) {
    this.modalPrice = val * Number(this.priceVal.split('Mwh')[0]);
  }

  changeSelected(val) {
    this.selectedVal = val;
  }

  changeSelectedPriceType(val) {
    this.priceType = val;
  }

  open(content, st) {
    this.modalProduct = st.name;
    this.priceVal = st.price;
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
    
  }

}

