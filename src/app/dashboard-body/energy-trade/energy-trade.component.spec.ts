import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyTradeComponent } from './energy-trade.component';

describe('EnergyTradeComponent', () => {
  let component: EnergyTradeComponent;
  let fixture: ComponentFixture<EnergyTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
