import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazioniTableComponent } from './prenotazioni-table.component';

describe('PrenotazioniTableComponent', () => {
  let component: PrenotazioniTableComponent;
  let fixture: ComponentFixture<PrenotazioniTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrenotazioniTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrenotazioniTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
