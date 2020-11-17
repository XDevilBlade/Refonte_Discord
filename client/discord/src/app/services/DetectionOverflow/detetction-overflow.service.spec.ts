import { TestBed } from '@angular/core/testing';

import { DetetctionOverflowService } from './detetction-overflow.service';

describe('DetetctionOverflowService', () => {
  let service: DetetctionOverflowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetetctionOverflowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
