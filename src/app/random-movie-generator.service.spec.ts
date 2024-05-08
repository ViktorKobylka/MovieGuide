import { TestBed } from '@angular/core/testing';

import { RandomMovieGeneratorService } from './random-movie-generator.service';

describe('RandomMovieGeneratorService', () => {
  let service: RandomMovieGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomMovieGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
