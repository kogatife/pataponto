import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:5000/api'; // Substitua pela URL real da sua API

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    const url = `${this.baseUrl}/register_user`;
    return this.http.post(url, user);
  }

  getUsers(): Observable<any> {
    const url = `${this.baseUrl}/get_user`;
    return this.http.get(url);
  }

  getTravels(): Observable<any> {
    const url = `${this.baseUrl}/get_travels`;
    return this.http.get(url);
  }
}
