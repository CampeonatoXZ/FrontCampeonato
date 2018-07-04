import { TestBed, inject } from '@angular/core/testing';

import { TipoChaveService } from './tipo-chave.service';

describe('TipoChaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoChaveService]
    });
  });

  it('should be created', inject([TipoChaveService], (service: TipoChaveService) => {
    expect(service).toBeTruthy();
  }));
});
