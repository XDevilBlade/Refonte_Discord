import { TestBed } from '@angular/core/testing';

import { ProcessWebsocketService } from './process-websocket.service';

describe('ProcessWebsocketService', () => {
  let service: ProcessWebsocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessWebsocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
