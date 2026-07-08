import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private api = "http://localhost:3001/api/customers/"

  constructor(
   private http:HttpClient
  ){}

  get():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.api);
  }
  getById(id: String):Observable<Customer>{
    return this.http.get<Customer>(this.api + "/" + id);
  }
  post(customer:Customer):Observable<Customer>{
    return this.http.post<Customer>(this.api,customer);
  }
  put(id: String,customer:Customer):Observable<Customer>{
    return this.http.put<Customer>(this.api + "/" + id, customer);
  }
  delete(id: String):Observable<Customer>{
    return this.http.delete<Customer>(this.api + "/" + id);
  }
}

