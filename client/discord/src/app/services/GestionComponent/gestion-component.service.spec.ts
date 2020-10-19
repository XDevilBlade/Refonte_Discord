import { TestBed } from '@angular/core/testing';

import { GestionComponentService } from './gestion-component.service';

describe('GestionComponentService', () => {
  let service: GestionComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
