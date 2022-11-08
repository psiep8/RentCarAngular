import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrenotazioniComponent } from './list-prenotazioni.component';

describe('ListPrenotazioniComponent', () => {
  let component: ListPrenotazioniComponent;
  let fixture: ComponentFixture<ListPrenotazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPrenotazioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPrenotazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
