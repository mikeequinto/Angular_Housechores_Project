import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegistrationRequest } from '../models/registrationRequest.model';
import { LoginRequest } from '../models/loginRequest.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  public register(registrationRequest: RegistrationRequest): Observable<any> {
    return this.http.post<any>(this.API_URL + "auth/register", registrationRequest);
  }

  public login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post<any>(this.API_URL + "auth/login", loginRequest);
  }
}
