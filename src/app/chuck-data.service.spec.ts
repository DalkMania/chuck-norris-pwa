import { TestBed } from '@angular/core/testing';

import { ChuckDataService } from './chuck-data.service';

describe('ChuckDataService', () => {
  let service: ChuckDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChuckDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
