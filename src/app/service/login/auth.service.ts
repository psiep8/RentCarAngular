import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {Customer} from "../../interfaces/customer";

const AUTH_API = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!: Customer;

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', null, {
      params: {
        email: email,
        password: password
      }, ...httpOptions
    }).pipe(
      tap((response: any) => {
        sessionStorage.setItem("isLoggedIn", "true")
        localStorage.setItem('token', response.token);
        let role = this.getRole(response.token)
        if (role === "ROLE_USER") {
          sessionStorage.setItem("isUser", "true")
        }
        this.user = this.getUser(response.token);
      })
    );
  }

  getUser(token: string): Customer {
    return JSON.parse(atob(token.split('.')[1])) as Customer;
  }

  getLoggedIn(): boolean {
    let log = sessionStorage.getItem("isLoggedIn")
    return log === "true";
  }

  getUserIn(): boolean {
    let log = sessionStorage.getItem("isUser")
    return log === "true";
  }

  getRole(token: string): string {
    let jwtData = JSON.parse(atob(token.split('.')[1]))
    return jwtData.role;
  }

  getEmail(token: string): string {
    let jwtData = JSON.parse(atob(token.split('.')[1]))
    return jwtData.sub;
  }

  logout() {
    localStorage.removeItem("token");
    sessionStorage.removeItem("isLoggedIn")
    sessionStorage.removeItem("isUser")
  }


}
