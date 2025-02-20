import { TestBed } from '@angular/core/testing';

import { BuragoService } from './burago.service';

describe('BuragoService', () => {
  let service: BuragoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuragoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
