import { TestBed } from '@angular/core/testing';

import { AtafserviceService } from './atafservice.service';

describe('AtafserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtafserviceService = TestBed.get(AtafserviceService);
    expect(service).toBeTruthy();
  });
});
