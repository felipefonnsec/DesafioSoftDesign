import { TestBed } from '@angular/core/testing';

import { PautaServiceService } from './pauta-service.service';

describe('PautaServiceService', () => {
  let service: PautaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PautaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
