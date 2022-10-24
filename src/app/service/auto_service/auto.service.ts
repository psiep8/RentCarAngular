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

  constructor(private httpClient: HttpClient) {
  }

  getAutos(): Observable<Auto[]> {
    return this.httpClient.get<Auto[]>(this.autoUrl);
  }

  createAuto(auto: Auto): Observable<Object> {
    console.log(auto)
    return this.httpClient.post((this.autoUrl + "/save"), auto );
  }

  getAutoById(id: number): Observable<Auto> {
    return this.httpClient.get<Auto>(`${this.autoUrl}/${id}`);
  }

  updateAuto(id: number, auto: Auto): Observable<Object> {
    console.log(auto)
    return this.httpClient.put(`${this.autoUrl}/edit/${id}`, auto);
  }

  deleteAuto(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.autoUrl}/delete/${id}`);
  }
}
