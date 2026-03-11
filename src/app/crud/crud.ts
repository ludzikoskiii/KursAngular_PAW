import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { SlicePipe } from '@angular/common'; // SlicePipe potrzebny do | slice w HTML

interface Post {
  id?: number;
  title: string;
  body: string;
  userId: number;
}

@Component({
  selector: 'app-crud',
  imports: [ReactiveFormsModule, SlicePipe],
  templateUrl: './crud.html',
  styleUrl: './crud.css',
})
export class Crud implements OnInit {
  posty: Post[] = [];
  tryb: 'dodaj' | 'edytuj' = 'dodaj'; // tryb formularza
  edytowanyId: number | null = null;   // ID edytowanego posta
  komunikat = '';

  // Reactive Form dla CRUD
  postForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    body:  new FormControl('', [Validators.required]),
  });

  get title() { return this.postForm.get('title'); }
  get body()  { return this.postForm.get('body'); }

  constructor(private http: HttpClient) {}

  ngOnInit() { this.pobierz(); }

  // READ - pobieramy liste
  pobierz() {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .subscribe(dane => this.posty = dane);
  }

  // Przygotowujemy formularz do edycji (wypelniamy danymi wybranego posta)
  edytuj(post: Post) {
    this.tryb = 'edytuj';
    this.edytowanyId = post.id!;
    // patchValue - wypelnia tylko podane pola (setValue wymaga wszystkich pol)
    this.postForm.patchValue({ title: post.title, body: post.body });
  }

  // CREATE lub UPDATE zaleznie od trybu
  zapisz() {
    if (this.postForm.invalid) return;

    const dane = { ...this.postForm.value, userId: 1 } as Post;

    if (this.tryb === 'dodaj') {
      // CREATE - POST
      this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', dane)
        .subscribe(res => {
          this.posty.unshift(res);  // unshift = dodaj na poczatek tablicy
          this.resetForm();
          this.komunikat = `Dodano post ID: ${res.id}`;
        });
    } else {
      // UPDATE - PUT
      this.http.put<Post>(`https://jsonplaceholder.typicode.com/posts/${this.edytowanyId}`, dane)
        .subscribe(res => {
          // aktualizujemy element w lokalnej tablicy
          const idx = this.posty.findIndex(p => p.id === this.edytowanyId);
          if (idx > -1) this.posty[idx] = { ...res, id: this.edytowanyId! };
          this.resetForm();
          this.komunikat = `Zaktualizowano post #${this.edytowanyId}`;
        });
    }
  }

  // DELETE
  usun(id: number) {
    this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .subscribe(() => {
        // filtrujemy lokalna tablice - usuwamy element bez ponownego GET
        this.posty = this.posty.filter(p => p.id !== id);
        this.komunikat = `Usunieto post #${id}`;
      });
  }

  resetForm() {
    this.postForm.reset();
    this.tryb = 'dodaj';
    this.edytowanyId = null;
  }
}
