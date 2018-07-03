import { TestBed, inject } from '@angular/core/testing';

import { ChaveService } from './chave.service';

describe('ChaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChaveService]
    });
  });

  it('should be created', inject([ChaveService], (service: ChaveService) => {
    expect(service).toBeTruthy();
  }));
});
