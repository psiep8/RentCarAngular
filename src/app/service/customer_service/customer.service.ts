import {Injectable} from '@angular/core';
import {CUSTOMERS} from "../../mock-customers";
import {Customer} from "../../customer";
import {catchError, Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customersUrl = 'admin/customers';

  constructor(private http: HttpClient) {
  }

  getCustomers(): Customer[] {
    return CUSTOMERS;
  }

}
