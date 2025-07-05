import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { SignInSubmit, SignUpSubmit } from '../../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class User {
  httpClient = inject(HttpClient);

  constructor() {}

  signIn(data: SignInSubmit): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/users/signIn`, data);
  }
  signUp(data: SignUpSubmit): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/users/singUp`, data);
  }
}
