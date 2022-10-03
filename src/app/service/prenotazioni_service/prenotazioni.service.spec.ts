import { TestBed } from '@angular/core/testing';

import { PrenotazioniServiceService } from './prenotazioni.service';

describe('PrenotazioniServiceService', () => {
  let service: PrenotazioniServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrenotazioniServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
