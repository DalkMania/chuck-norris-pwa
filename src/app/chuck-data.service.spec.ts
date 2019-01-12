import { TestBed } from '@angular/core/testing';

import { ChuckDataService } from './chuck-data.service';

describe('ChuckDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChuckDataService = TestBed.get(ChuckDataService);
    expect(service).toBeTruthy();
  });
});
