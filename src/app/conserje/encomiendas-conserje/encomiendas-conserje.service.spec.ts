import { TestBed } from '@angular/core/testing';

import { EncomiendasConserjeService } from './encomiendas-conserje.service';

describe('EncomiendasConserjeService', () => {
  let service: EncomiendasConserjeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncomiendasConserjeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
