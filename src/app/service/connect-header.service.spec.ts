import { TestBed } from '@angular/core/testing';

import { ConnectHeaderService } from './connect-header.service';

describe('ConnectHeaderService', () => {
  let service: ConnectHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
