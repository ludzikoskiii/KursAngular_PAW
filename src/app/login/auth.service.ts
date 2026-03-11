import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Signal przechowujący stan zalogowania – dostępny w całej aplikacji
  private _zalogowany = signal(false);
  private _uzytkownik = signal<any>(null);

  // Publiczne computed do odczytu (readonly)
  zalogowany = this._zalogowany.asReadonly();
  uzytkownik = this._uzytkownik.asReadonly();

  constructor(private http: HttpClient) {
    // Sprawdzamy czy token jest w localStorage (persist po odświeżeniu)
    const token = localStorage.getItem('token');
    if (token) this._zalogowany.set(true);
  }

  // Logowanie – w prawdziwej apce POST do /api/login
  // Tutaj symulujemy przez dummyjson.com
  login(login: string, haslo: string) {
    return this.http.post<any>('https://dummyjson.com/auth/login', {
      username: login,
      password: haslo
    });
  }

  // Zapisz token i ustaw stan zalogowania
  zapiszSesje(data: any) {
    localStorage.setItem('token', data.accessToken);  // zapis tokena JWT
    this._zalogowany.set(true);
    this._uzytkownik.set(data);
  }

  // Wylogowanie – czyścimy token i stan
  logout() {
    localStorage.removeItem('token');
    this._zalogowany.set(false);
    this._uzytkownik.set(null);
  }
}
