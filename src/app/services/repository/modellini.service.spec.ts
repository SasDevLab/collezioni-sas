import { TestBed } from '@angular/core/testing';

import { CollectionsService } from './modellini.service';

describe('ModelliniService', () => {
  let service: CollectionsService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
