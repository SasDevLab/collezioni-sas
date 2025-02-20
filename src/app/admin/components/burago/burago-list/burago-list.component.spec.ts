import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuragoListComponent } from './burago-list.component';

describe('BuragoListComponent', () => {
  let component: BuragoListComponent;
  let fixture: ComponentFixture<BuragoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuragoListComponent]
    });
    fixture = TestBed.createComponent(BuragoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
