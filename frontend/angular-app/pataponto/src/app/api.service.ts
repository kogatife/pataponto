import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Viagens } from './api';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly GET_TRAVELS = 'http://localhost:5000/api/get_travels';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Viagens[]>(this.GET_TRAVELS).pipe(
      tap(console.log)
    );
  }
}
