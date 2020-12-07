import { TestBed } from '@angular/core/testing';

import { AccessContactsService } from './access-contacts.service';

describe('AccessContactsService', () => {
  let service: AccessContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
