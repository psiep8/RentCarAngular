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
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private _isAdmin$ = new BehaviorSubject<boolean>(false);
  isAdmin$ = this._isAdmin$.asObservable();

  private _isUser$ = new BehaviorSubject<boolean>(false);
  isUser$ = this._isUser$.asObservable();

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
        this._isLoggedIn$.next(true);
        localStorage.setItem('token', response.token);
        let role = this.getRole(response.token)
        if (role === "ROLE_ADMIN") {
          this._isAdmin$.next(true);
        } else if (role === "ROLE_USER") {
          this._isUser$.next(true);
        }
        this.user = this.getUser(response.token);
      })
    );
  }

  getUser(token: string): Customer {
    return JSON.parse(atob(token.split('.')[1])) as Customer;
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
    this._isLoggedIn$.next(false);
    this._isUser$.next(false)
    this._isAdmin$.next(false)

  }


}
