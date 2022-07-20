import { TestBed } from '@angular/core/testing';

import { PrimeNumbersService } from './prime-numbers.service';

describe('PrimeNumbersService', () => {
  let service: PrimeNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimeNumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
