import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../constants/api';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public isAuthenticated: boolean = false;

  constructor(private httpClient: HttpClient) { }

  authenticate(user: User): Observable<any> {
    const url = API.auth;
    return this.httpClient.post(url, user);
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
