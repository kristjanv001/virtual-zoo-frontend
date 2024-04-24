import { TestBed } from '@angular/core/testing';

import { HologramService } from './hologram.service';

describe('HologramService', () => {
  let service: HologramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HologramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
