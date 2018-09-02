import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiprotecDataComponent } from './siprotec-data.component';

describe('SiprotecDataComponent', () => {
  let component: SiprotecDataComponent;
  let fixture: ComponentFixture<SiprotecDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiprotecDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiprotecDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
