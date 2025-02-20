import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoFormComponent } from './lego-form.component';

describe('LegoFormComponent', () => {
  let component: LegoFormComponent;
  let fixture: ComponentFixture<LegoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegoFormComponent]
    });
    fixture = TestBed.createComponent(LegoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
