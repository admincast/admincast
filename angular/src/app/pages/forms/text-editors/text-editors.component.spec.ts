import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorsComponent } from './text-editors.component';

describe('TextEditorsComponent', () => {
  let component: TextEditorsComponent;
  let fixture: ComponentFixture<TextEditorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextEditorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
