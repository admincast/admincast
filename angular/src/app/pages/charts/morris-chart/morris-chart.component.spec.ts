import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorrisChartComponent } from './morris-chart.component';

describe('MorrisChartComponent', () => {
  let component: MorrisChartComponent;
  let fixture: ComponentFixture<MorrisChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorrisChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorrisChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
