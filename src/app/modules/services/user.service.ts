import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUser(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${email}`).pipe(
      tap((response: any) => {
        // Guardar el token en localStorage
        if (response.token) {
          localStorage.setItem('authToken', response.token);
        }
      })
    );
  }

  createUser(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, { email }).pipe(
      tap((response: any) => {
        // Guardar el token si se crea un nuevo usuario
        if (response.token) {
          localStorage.setItem('authToken', response.token);
        }
      })
    );
  }
}
