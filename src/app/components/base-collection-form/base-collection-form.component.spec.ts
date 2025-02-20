import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCollectionFormComponent } from './base-collection-form.component';

describe('BaseCollectionFormComponent', () => {
  let component: BaseCollectionFormComponent;
  let fixture: ComponentFixture<BaseCollectionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseCollectionFormComponent]
    });
    fixture = TestBed.createComponent(BaseCollectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
