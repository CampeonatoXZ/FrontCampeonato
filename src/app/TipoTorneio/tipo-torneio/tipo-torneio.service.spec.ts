import { TestBed, inject } from '@angular/core/testing';

import { TipoTorneioService } from './tipo-torneio.service';

describe('TipoTorneioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoTorneioService]
    });
  });

  it('should be created', inject([TipoTorneioService], (service: TipoTorneioService) => {
    expect(service).toBeTruthy();
  }));
});
