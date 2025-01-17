import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  url = 'http://localhost:3000/allbooks';
  constructor(private http: HttpClient) {}
  getJoke(): Observable<any> {
    return this.http.get(this.url, { headers: { Accept: 'application/json' } });
  }
}