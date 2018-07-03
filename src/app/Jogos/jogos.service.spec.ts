import { TestBed, inject } from '@angular/core/testing';

import { JogosService } from './jogos.service';

describe('JogosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JogosService]
    });
  });

  it('should be created', inject([JogosService], (service: JogosService) => {
    expect(service).toBeTruthy();
  }));
});
