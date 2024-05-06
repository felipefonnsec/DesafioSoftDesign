import { TestBed } from '@angular/core/testing';

import { VotoEnumService } from './voto-enum.service';

describe('VotoEnumService', () => {
  let service: VotoEnumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotoEnumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
