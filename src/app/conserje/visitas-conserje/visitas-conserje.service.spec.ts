import { TestBed } from '@angular/core/testing';

import { VisitasConserjeService } from './visitas-conserje.service';

describe('VisitasConserjeService', () => {
  let service: VisitasConserjeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitasConserjeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
