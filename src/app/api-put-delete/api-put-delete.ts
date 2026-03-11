import { Component } from '@angular/core';
import { NgClass, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-put-delete',
  imports: [FormsModule, NgClass, JsonPipe],
  templateUrl: './api-put-delete.html',
  styleUrl: './api-put-delete.css',
})
export class ApiPutDelete {
  // Dane edytowanego posta
  post = {
    id: 1,
    title: 'Przykładowy tytuł',
    body: 'Treść posta do edycji',
    userId: 1
  };

  komunikat: string = '';
  typKomunikatu: string = 'success'; // 'success' lub 'danger'
  ladowanie = false;

  constructor(private http: HttpClient) {}

  // PUT – aktualizujemy CAŁY obiekt (wysyłamy pełne dane)
  aktualizuj() {
    this.ladowanie = true;

    // http.put(url/id, noweData) – zastępuje cały zasób
    this.http.put(`https://jsonplaceholder.typicode.com/posts/${this.post.id}`, this.post)
      .subscribe({
        next: (res: any) => {
          this.komunikat = `✅ PUT: Post #${res.id} zaktualizowany!`;
          this.typKomunikatu = 'success';
          this.ladowanie = false;
        },
        error: () => {
          this.komunikat = '❌ Błąd aktualizacji';
          this.typKomunikatu = 'danger';
          this.ladowanie = false;
        }
      });
  }

  // DELETE – usuwamy zasób po ID
  usun() {
    if (!confirm(`Usunąć post #${this.post.id}?`)) return; // potwierdzenie

    this.ladowanie = true;

    // http.delete(url/id) – usuwa zasób; fake API zwraca pusty obiekt {}
    this.http.delete(`https://jsonplaceholder.typicode.com/posts/${this.post.id}`)
      .subscribe({
        next: () => {
          this.komunikat = `🗑️ DELETE: Post #${this.post.id} usunięty!`;
          this.typKomunikatu = 'success';
          this.ladowanie = false;
        },
        error: () => {
          this.komunikat = '❌ Błąd usuwania';
          this.typKomunikatu = 'danger';
          this.ladowanie = false;
        }
      });
  }
}
