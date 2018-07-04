import { TestBed, inject } from '@angular/core/testing';

import { TipoContatoService } from './tipo-contato.service';

describe('TipoContatoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoContatoService]
    });
  });

  it('should be created', inject([TipoContatoService], (service: TipoContatoService) => {
    expect(service).toBeTruthy();
  }));
});
