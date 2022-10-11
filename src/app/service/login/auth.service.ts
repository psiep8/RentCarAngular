import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FAKE_JWT_TOKEN} from "./auth-interceptor";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'api/auth'

  constructor() {
  }

  private setSession(token: any) {
    sessionStorage.setItem('token', token);
  }

  login(email: string, password: string) {
    this.setSession(FAKE_JWT_TOKEN)

    return {
      username: email,
      password: password,
      token: FAKE_JWT_TOKEN
    };
  }
  deleteToken(){
    sessionStorage.removeItem('token')
  }
}
