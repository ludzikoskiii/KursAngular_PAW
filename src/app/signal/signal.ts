import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  // SIGNAL - reaktywna zmienna w Angular 16+
  // W przeciwieństwie do zwykłej zmiennej, signal automatycznie powiadamia
  // widok o zmianie wartości bez potrzeby używania Zone.js
  licznik = signal(0);               // tworzymy signal z wartością początkową 0

  imie = signal('Jan');              // signal z wartością tekstową

  // COMPUTED - signal wyliczany na podstawie innych signali
  // Automatycznie aktualizuje się gdy licznik się zmieni
  podwojonaWartosc = computed(() => this.licznik() * 2);

  // Zwiększamy wartość signala metodą .update()
  zwieksz() {
    this.licznik.update(val => val + 1); // update przyjmuje funkcję ze starą wartością
  }

  // Zmniejszamy wartość signala
  zmniejsz() {
    this.licznik.update(val => val - 1);
  }

  // Ustawiamy wartość bezpośrednio metodą .set()
  resetuj() {
    this.licznik.set(0);             // set() ustawia konkretną wartość
  }

  // Zmiana imienia przez .set()
  zmienImie(noweImie: string) {
    this.imie.set(noweImie);
  }
}
