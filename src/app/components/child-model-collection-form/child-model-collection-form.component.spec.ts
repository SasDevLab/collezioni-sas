import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildModelCollectionFormComponent } from './child-model-collection-form.component';

describe('ChildModelCollectionFormComponent', () => {
  let component: ChildModelCollectionFormComponent;
  let fixture: ComponentFixture<ChildModelCollectionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildModelCollectionFormComponent]
    });
    fixture = TestBed.createComponent(ChildModelCollectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
