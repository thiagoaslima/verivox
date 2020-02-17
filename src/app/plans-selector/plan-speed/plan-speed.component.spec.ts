import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSpeedComponent } from './plan-speed.component';

describe('PlanSpeedComponent', () => {
  let component: PlanSpeedComponent;
  let fixture: ComponentFixture<PlanSpeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanSpeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
