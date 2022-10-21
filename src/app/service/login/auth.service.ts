import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FAKE_JWT_TOKEN} from "./auth-interceptor";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'api/auth'

  constructor(private http: HttpClient) {
  }

  private setSession(token: any) {
    sessionStorage.setItem(FAKE_JWT_TOKEN, token);
  }

  login(email: string, password: string) {
    this.setSession(FAKE_JWT_TOKEN)

    return {
      username: email,
      password: password,
      token: FAKE_JWT_TOKEN
    };
  }

  deleteToken() {
    sessionStorage.removeItem(FAKE_JWT_TOKEN)
  }

  getWelcome = (): Observable<any> => this.http.get('http://localhost:8080/api/welcome')
}
