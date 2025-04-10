import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuragoDetailComponent } from './burago-detail.component';

describe('BuragoDetailComponent', () => {
  let component: BuragoDetailComponent;
  let fixture: ComponentFixture<BuragoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuragoDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuragoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
