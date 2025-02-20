import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoGalleryComponent } from './lego-gallery.component';

describe('LegoGalleryComponent', () => {
  let component: LegoGalleryComponent;
  let fixture: ComponentFixture<LegoGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegoGalleryComponent]
    });
    fixture = TestBed.createComponent(LegoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
