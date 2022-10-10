import {Injectable} from '@angular/core';
import {tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Customer} from "../../interfaces/customer";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post<Customer>('', {email, password})
    // this is just the HTTP call,
    // we still need to handle the reception of the token
  }
}
