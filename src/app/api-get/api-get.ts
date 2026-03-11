import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Interfejs definiuje kształt danych z API (dobre praktyki TypeScript)
interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-api-get',
  imports: [CommonModule],
  templateUrl: './api-get.html',
  styleUrl: './api-get.css',
})
export class ApiGet implements OnInit {
  // Tablica na pobrane posty; domyślnie pusta
  posty: Post[] = [];

  // Flagi stanu
  ladowanie: boolean = false;
  blad: string = '';

  // HttpClient wstrzykujemy przez konstruktor (Dependency Injection)
  constructor(private http: HttpClient) {}

  // OnInit – Angular wywołuje ngOnInit() zaraz po utworzeniu komponentu
  ngOnInit() {
    this.pobierzPosty();             // automatycznie pobieramy dane po załadowaniu
  }

  pobierzPosty() {
    this.ladowanie = true;           // włączamy spinner ładowania
    this.blad = '';

    // http.get<Post[]>() zwraca Observable – musimy zasubskrybować (.subscribe())
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .subscribe({
        next: (dane) => {            // next: wywołuje się gdy dane przyszły poprawnie
          this.posty = dane;
          this.ladowanie = false;
        },
        error: (err) => {            // error: wywołuje się gdy wystąpił błąd
          this.blad = 'Błąd pobierania danych: ' + err.message;
          this.ladowanie = false;
        }
      });
  }
}
