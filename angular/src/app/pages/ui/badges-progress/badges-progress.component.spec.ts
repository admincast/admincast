import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesProgressComponent } from './badges-progress.component';

describe('BadgesProgressComponent', () => {
  let component: BadgesProgressComponent;
  let fixture: ComponentFixture<BadgesProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgesProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
