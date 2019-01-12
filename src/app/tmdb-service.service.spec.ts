import { TestBed } from '@angular/core/testing';

import { TMDbService } from './tmdb.service';

describe('TMDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TMDbService = TestBed.get(TMDbService);
    expect(service).toBeTruthy();
  });
});
