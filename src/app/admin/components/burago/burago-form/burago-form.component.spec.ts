import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuragoFormComponent } from './burago-form.component';

describe('BuragoFormComponent', () => {
  let component: BuragoFormComponent;
  let fixture: ComponentFixture<BuragoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuragoFormComponent]
    });
    fixture = TestBed.createComponent(BuragoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
