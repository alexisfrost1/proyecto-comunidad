import { TestBed } from '@angular/core/testing';

import { EncomiendasService } from './encomiendas.service';

describe('EncomiendasService', () => {
  let service: EncomiendasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncomiendasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
