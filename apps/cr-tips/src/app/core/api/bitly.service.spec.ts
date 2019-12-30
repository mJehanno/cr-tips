import { TestBed } from '@angular/core/testing';

import { BitlyService } from './bitly.service';

describe('BitlyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BitlyService = TestBed.get(BitlyService);
    expect(service).toBeTruthy();
  });
});
