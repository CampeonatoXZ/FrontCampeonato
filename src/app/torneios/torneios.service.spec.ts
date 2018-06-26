import { TestBed, inject } from '@angular/core/testing';

import { TorneiosService } from './torneios.service';

describe('TorneiosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TorneiosService]
    });
  });

  it('should be created', inject([TorneiosService], (service: TorneiosService) => {
    expect(service).toBeTruthy();
  }));
});