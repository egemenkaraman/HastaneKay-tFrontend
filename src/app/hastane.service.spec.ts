import { TestBed } from '@angular/core/testing';

import { HastaneService } from './hastane.service';

describe('HastaneService', () => {
  let service: HastaneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HastaneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
