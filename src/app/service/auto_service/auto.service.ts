import {Injectable} from '@angular/core';
import {catchError, Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Auto} from "../../interfaces/auto";
import {Customer} from "../../interfaces/customer";

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  private autoUrl = "http://localhost:8080/api/auto";

  constructor(private http: HttpClient) {
  }

  private log(message: string) {
    console.log(`UserService: ${message}`);
  }


  /** GET heroes from the server */
  getAutos(): Observable<Auto[]> {
    return this.http.get<Auto[]>(this.autoUrl);
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
  getAuto(id: number): Observable<Auto> {
    const url = `${this.autoUrl}/${id}`;
    return this.http.get<Auto>(url).pipe(
      tap(_ => this.log(`fetched auto id=${id}`)),
      catchError(this.handleError<Auto>(`getAuto id=${id}`))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  /** PUT: update the hero on the server */
  updateAuto(auto: Auto): Observable<any> {
    return this.http.put(this.autoUrl, auto, this.httpOptions).pipe(
      tap(_ => this.log(`updated auto id=${auto.id}`)),
      catchError(this.handleError<any>('updateAuto'))
    );
  }

  /** POST: add a new hero to the server */
  addAuto(auto: Auto): Observable<Auto> {
    return this.http.post<Auto>(this.autoUrl, auto, this.httpOptions).pipe(
      tap((newUser: Auto) => this.log(`added auto w/ id=${auto.id}`)),
      catchError(this.handleError<Auto>('addAuto'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteAuto(id: number): Observable<Auto> {
    const url = `${this.autoUrl}/${id}`;
    return this.http.delete<Auto>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted auto id=${id}`)),
      catchError(this.handleError<Auto>('deleteAuto'))
    );
  }

}
