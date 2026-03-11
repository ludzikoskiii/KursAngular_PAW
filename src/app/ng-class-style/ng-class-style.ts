import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-ng-class-style',
  imports: [NgClass, NgStyle],
  templateUrl: './ng-class-style.html',
  styleUrl: './ng-class-style.css',
})
export class NgClassStyle {
  // Zmienna kontrolująca aktywność elementu
  jestAktywny: boolean = false;

  // Zmienna kontrolująca kolor tekstu (używana przez ngStyle)
  kolorTekstu: string = 'blue';

  // Rozmiar czcionki do ngStyle
  rozmiarCzcionki: number = 16;

  // Aktualnie wybrany temat kolorystyczny
  wybranyTemat: string = 'jasny';

  przelaczAktywnosc() {
    this.jestAktywny = !this.jestAktywny;
  }
}
