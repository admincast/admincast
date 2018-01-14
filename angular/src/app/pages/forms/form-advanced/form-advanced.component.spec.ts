import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdvancedComponent } from './form-advanced.component';

describe('FormAdvancedComponent', () => {
  let component: FormAdvancedComponent;
  let fixture: ComponentFixture<FormAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
