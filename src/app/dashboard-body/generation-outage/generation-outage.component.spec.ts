import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationOutageComponent } from './generation-outage.component';

describe('GenerationOutageComponent', () => {
  let component: GenerationOutageComponent;
  let fixture: ComponentFixture<GenerationOutageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerationOutageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationOutageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
