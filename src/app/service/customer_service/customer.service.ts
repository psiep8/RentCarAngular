import {Injectable} from '@angular/core';
import {Customer} from "../../interfaces/customer";
import {catchError, Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Prenotazioni} from "../../interfaces/prenotazioni";

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

  getPrenotazioni(): Observable<Prenotazioni[]> {
    return this.httpClient.get<Prenotazioni[]>(this.customersUrl + "/listPrenotazioni");
  }

  approvaPrenotazione(id: number): Observable<Object> {
    return this.httpClient.post(this.customersUrl + "/approvata", null, {
      params: {
        prenotazioneID: id
      }
    });
  }

  createCustomer(customer: Customer): Observable<Object> {
    return this.httpClient.post((this.customersUrl + "/upSert"), customer);
  }

  getUserByEmail(email: string): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.customersUrl}/email`, {
      params: {
        email: email
      }
    });
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.customersUrl}/id/${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Object> {
    return this.httpClient.put(`${this.customersUrl}/upSert`, customer);
  }

  deleteCustomer(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.customersUrl}/delete/${id}`);
  }

}
