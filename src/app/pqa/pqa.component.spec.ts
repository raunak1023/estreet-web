import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PqaComponent } from './pqa.component';

describe('PqaComponent', () => {
  let component: PqaComponent;
  let fixture: ComponentFixture<PqaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PqaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
