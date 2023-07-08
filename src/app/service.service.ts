import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = 'http://localhost:3000/myList'; // JSON Server base URL

  constructor(private http: HttpClient) {}

  register(myList: any) {
    return this.http.post(this.baseUrl, myList);
  }

  login(credentials: any) {
    return this.http.get(this.baseUrl, { params: credentials });
  }
}
