import {Injectable} from '@angular/core';
import {catchError, Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Prenotazioni} from "../../interfaces/prenotazioni";

@Injectable({
  providedIn: 'root'
})
export class PrenotazioniService {

  private prenotazioniUrl = 'api/prenotazioni';

  constructor(private http: HttpClient) {
  }

  private log(message: string) {
    console.log(`UserService: ${message}`);
  }


  /** GET heroes from the server */
  getPrenotazioni(): Observable<Prenotazioni[]> {
    return this.http.get<Prenotazioni[]>(this.prenotazioniUrl)
      .pipe(
        tap(_ => this.log('fetched prenotazione')),
        catchError(this.handleError<Prenotazioni[]>('getPrenotazioni', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** GET hero by id. Will 404 if id not found */
  getPrenotazione(id: number): Observable<Prenotazioni> {
    const url = `${this.prenotazioniUrl}/${id}`;
    return this.http.get<Prenotazioni>(url).pipe(
      tap(_ => this.log(`fetched prenotazione id=${id}`)),
      catchError(this.handleError<Prenotazioni>(`getPrenotazione id=${id}`))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  /** PUT: update the hero on the server */
  updatePrenotazione(prenotazioni: Prenotazioni): Observable<any> {
    return this.http.put(this.prenotazioniUrl, prenotazioni, this.httpOptions).pipe(
      tap(_ => this.log(`updated prenotazione id=${prenotazioni.id}`)),
      catchError(this.handleError<any>('updatePrenotazione'))
    );
  }

  /** POST: add a new hero to the server */
  addPrenotazione(prenotazioni: Prenotazioni): Observable<Prenotazioni> {
    return this.http.post<Prenotazioni>(this.prenotazioniUrl, prenotazioni, this.httpOptions).pipe(
      tap((newUser: Prenotazioni) => this.log(`added prenotazione w/ id=${prenotazioni.id}`)),
      catchError(this.handleError<Prenotazioni>('addPrenotazione'))
    );
  }

  /** DELETE: delete the hero from the server */
  deletePrenotazione(id: number): Observable<Prenotazioni> {
    const url = `${this.prenotazioniUrl}/${id}`;
    return this.http.delete<Prenotazioni>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted prenotazione id=${id}`)),
      catchError(this.handleError<Prenotazioni>('deletePrenotazione'))
    );
  }

}
