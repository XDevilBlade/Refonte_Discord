import { TestBed } from '@angular/core/testing';

import { AccessInstanceAppcomponentService } from './access-instance-appcomponent.service';

describe('AccessInstanceAppcomponentService', () => {
  let service: AccessInstanceAppcomponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessInstanceAppcomponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
