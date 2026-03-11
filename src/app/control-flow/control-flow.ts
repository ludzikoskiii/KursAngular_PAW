import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  // Zmienne do demonstracji @if / @else
  jestZalogowany: boolean = false;
  wiek: number = 20;
  ocena: number = 75;

  // Tablica do demonstracji @for
  produkty = [
    { id: 1, nazwa: 'Laptop',   cena: 3500 },
    { id: 2, nazwa: 'Telefon',  cena: 1200 },
    { id: 3, nazwa: 'Tablet',   cena: 800  },
    { id: 4, nazwa: 'Monitor',  cena: 600  },
  ];

  // Pusta tablica – do demonstracji @empty w @for
  pustaLista: string[] = [];

  // Przełączamy status zalogowania
  przelaczLogin() {
    this.jestZalogowany = !this.jestZalogowany;
  }
}
