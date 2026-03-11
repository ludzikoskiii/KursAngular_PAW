import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div class="container mt-5 text-center">
      <h1>404 😕</h1>
      <p>Strona nie została znaleziona</p>
      <!-- routerLink wraca do strony głównej / pierwszej trasy -->
      <a class="btn btn-primary" routerLink="/zmienne">Wróć do początku</a>
    </div>
  `
})
export class NotFound {}
