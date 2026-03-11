import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfejs modelu danych
export interface Post {
  id?: number;
  userId: number;
  title: string;
  body: string;
}

// @Injectable({ providedIn: 'root' }) – serwis dostępny w całej aplikacji (singleton)
// Nie trzeba rejestrować go ręcznie w providers[]
@Injectable({ providedIn: 'root' })
export class PostService {
  // Bazowy URL API – wygodne do zmiany (np. dev vs prod)
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  // Metody serwisu zwracają Observable – komponent sam decyduje kiedy zasubskrybować

  // Pobierz wszystkie posty (opcjonalny limit)
  getPosts(limit: number = 5): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}?_limit=${limit}`);
  }

  // Pobierz jeden post po ID
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  // Utwórz nowy post
  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }

  // Aktualizuj post (PUT zastępuje cały obiekt)
  updatePost(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${id}`, post);
  }

  // Usuń post
  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
