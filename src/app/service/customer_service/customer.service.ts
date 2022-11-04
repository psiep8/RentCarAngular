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
    return this.httpClient.post("http://localhost:8080/api/prenotazione/approvata", null, {
      params: {
        prenotazioneID: id
      }
    });
  }

  createCustomer(customer: Customer): Observable<Object> {
    console.log(customer)
    return this.httpClient.post((this.customersUrl + "/save"), customer);
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.customersUrl}/${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Object> {
    return this.httpClient.put(`${this.customersUrl}/edit`, customer);
  }

  deleteCustomer(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.customersUrl}/delete/${id}`);
  }

}
