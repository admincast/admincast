import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsVectorComponent } from './maps-vector.component';

describe('MapsVectorComponent', () => {
  let component: MapsVectorComponent;
  let fixture: ComponentFixture<MapsVectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsVectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsVectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
