import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Auto} from "../../interfaces/auto";
import {Customer} from "../../interfaces/customer";
import {Moment} from "moment";
import {Observable} from "rxjs";
import {Subject} from "rxjs/internal/Subject";

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
    return this.httpClient.post((this.autoUrl + "/upSert"), auto);
  }

  getAutoById(id: number): Observable<Auto> {
    return this.httpClient.get<Auto>(`${this.autoUrl}/${id}`);
  }

  updateAuto(id: number, auto: Auto): Observable<Object> {
    return this.httpClient.put(`${this.autoUrl}/upSert`, auto);
  }

  deleteAuto(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.autoUrl}/delete/${id}`);
  }

  getAutoInRange(inizio: any, fine: any): Observable<Object> {
    return this.httpClient.get((this.autoUrl + "/filterDate"), {
      params: {
        inizio: inizio,
        fine: fine
      },
    });
  }


}
