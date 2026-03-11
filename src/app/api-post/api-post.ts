import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-post',
  imports: [FormsModule],
  templateUrl: './api-post.html',
  styleUrl: './api-post.css',
})
export class ApiPost {
  // Obiekt który wysyłamy w żądaniu POST
  nowyPost = {
    title: '',
    body: '',
    userId: 1    // stały userId dla uproszczenia
  };

  odpowiedz: any = null;   // odpowiedź z serwera
  ladowanie = false;
  blad = '';

  constructor(private http: HttpClient) {}

  wyslijPost() {
    this.ladowanie = true;
    this.blad = '';
    this.odpowiedz = null;

    // http.post(url, body) – wysyłamy dane jako JSON
    // Serwer zwraca stworzony obiekt z nadanym ID
    this.http.post('https://jsonplaceholder.typicode.com/posts', this.nowyPost)
      .subscribe({
        next: (res) => {
          this.odpowiedz = res;       // zapisujemy odpowiedź serwera
          this.ladowanie = false;
          this.resetForm();           // czyścimy formularz po sukcesie
        },
        error: (err) => {
          this.blad = 'Błąd: ' + err.message;
          this.ladowanie = false;
        }
      });
  }

  resetForm() {
    this.nowyPost = { title: '', body: '', userId: 1 }; // reset danych formularza
  }
}
