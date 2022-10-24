import {Injectable} from '@angular/core';
import {catchError, Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Prenotazioni} from "../../interfaces/prenotazioni";
import {Auto} from "../../interfaces/auto";
import {AutoService} from "../auto_service/auto.service";

@Injectable({
  providedIn: 'root'
})
export class PrenotazioniService {

  private prenotazioniUrl = "http://localhost:8080/api/prenotazione";

  constructor(private httpClient: HttpClient, private autoService: AutoService) {
  }

  getPrenotazioni(): Observable<Prenotazioni[]> {
    return this.httpClient.get<Prenotazioni[]>(this.prenotazioniUrl);
  }

  createPrenotazione(prenotazione: Prenotazioni): Observable<Object> {
    console.log(prenotazione)
    return this.httpClient.post((this.prenotazioniUrl + "/save"), prenotazione);
  }

  getPrenotazioneById(id: number): Observable<Prenotazioni> {
    return this.httpClient.get<Prenotazioni>(`${this.prenotazioniUrl}/${id}`);
  }

  updatePrenotazione(id: number, prenotazione: Prenotazioni): Observable<Object> {
    return this.httpClient.put(`${this.prenotazioniUrl}/edit/${id}`, prenotazione);
  }

  deletePrenotazione(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.prenotazioniUrl}/delete/${id}`);
  }

  /*getDataRange(inizio: any, fine: any): Observable<Auto[]> {
    return this.httpClient.post(this.prenotazioniUrl + "/filterDate",this.autoService.getAutos())
  }*/


}
