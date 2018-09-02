import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiprotecDeviceDetailsComponent } from './siprotec-device-details.component';

describe('SiprotecDeviceDetailsComponent', () => {
  let component: SiprotecDeviceDetailsComponent;
  let fixture: ComponentFixture<SiprotecDeviceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiprotecDeviceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiprotecDeviceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
