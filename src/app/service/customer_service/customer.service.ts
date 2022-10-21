import {Injectable} from '@angular/core';
import {Customer} from "../../interfaces/customer";
import {catchError, Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customersUrl = "http://localhost:8080/api/utente";

  constructor(private httpClient: HttpClient) {
  }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.customersUrl);
  }

  createCustomer(employee: Customer): Observable<Object> {
    return this.httpClient.post((this.customersUrl), employee);
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.customersUrl}/${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Object> {
    return this.httpClient.put(`${this.customersUrl}/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.customersUrl}/${id}`);
  }

}
