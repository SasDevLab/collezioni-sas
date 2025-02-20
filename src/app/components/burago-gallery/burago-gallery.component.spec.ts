import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuragoGalleryComponent } from './burago-gallery.component';

describe('BuragoGalleryComponent', () => {
  let component: BuragoGalleryComponent;
  let fixture: ComponentFixture<BuragoGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuragoGalleryComponent]
    });
    fixture = TestBed.createComponent(BuragoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
