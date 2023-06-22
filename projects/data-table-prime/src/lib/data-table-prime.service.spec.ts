import { TestBed } from '@angular/core/testing';

import { DataTablePrimeService } from './data-table-prime.service';

describe('DataTablePrimeService', () => {
  let service: DataTablePrimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTablePrimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
