import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public isAuthenticated: boolean = false;

  constructor(private httpClient: HttpClient) { }

  authenticate(request: object): Observable<any> {
    const url = API.auth;
    return this.httpClient.post(url, request);
  }

  getToken(): string {
    const token = localStorage.getItem('token') || '';
    return token;
  }

  setToken(accessToken: string): void {
    console.log(accessToken);
    localStorage.setItem('token', accessToken);
  }

}
