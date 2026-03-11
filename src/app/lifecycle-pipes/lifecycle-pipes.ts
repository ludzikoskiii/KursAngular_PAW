import { Component, OnInit, OnDestroy, OnChanges,
         AfterViewInit, Input, signal } from '@angular/core';
import { CurrencyPipe, DatePipe, UpperCasePipe,
         LowerCasePipe, DecimalPipe, SlicePipe, JsonPipe, PercentPipe } from '@angular/common';

// ===== KOMPONENT DZIECKA – do demonstracji cyklu życia =====
@Component({
  selector: 'app-dziecko',
  imports: [],
  template: `
    <div class="alert alert-light border p-2 mt-2">
      <strong>Komponent Dziecko</strong><br>
      Wartość od rodzica: <code>{{ wartoscOdRodzica }}</code>
    </div>
  `
})
export class KomponentDziecko implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() wartoscOdRodzica: string = '';  // @Input() odbiera dane od rodzica

  ngOnChanges() {
    // Wywołuje się gdy @Input() się zmieni (przed ngOnInit)
    console.log('ngOnChanges – wartość wejściowa się zmieniła:', this.wartoscOdRodzica);
  }

  ngOnInit() {
    // Wywołuje się raz po pierwszym renderze – tutaj inicjalizujemy dane
    console.log('ngOnInit – komponent dziecka zainicjalizowany');
  }

  ngAfterViewInit() {
    // Wywołuje się po wyrenderowaniu widoku – tutaj możemy manipulować DOM
    console.log('ngAfterViewInit – widok dziecka gotowy');
  }

  ngOnDestroy() {
    // Wywołuje się przed usunięciem komponentu – tutaj czyścimy subskrypcje
    console.log('ngOnDestroy – komponent dziecka zniszczony');
  }
}

// ===== KOMPONENT GŁÓWNY LEKCJI =====
@Component({
  selector: 'app-lifecycle-pipes',
  imports: [
    CurrencyPipe, DatePipe, UpperCasePipe, LowerCasePipe,
    DecimalPipe, SlicePipe, JsonPipe, PercentPipe,
    KomponentDziecko   // importujemy komponent dziecka jako standalone
  ],
  templateUrl: './lifecycle-pipes.html',
  styleUrl: './lifecycle-pipes.css',
})
export class LifecyclePipes implements OnInit, OnDestroy, AfterViewInit {
  pokazDziecko = signal(true); // sygnał kontrolujący widoczność dziecka
  wartoscDlaDziecka = signal('Witaj Dziecko!');

  // Dane do demonstracji Pipes
  cena       = 1234.5;
  data       = new Date();
  tekst      = 'Angular dwadziescia jeden';
  liczba     = 3.14159;
  procent    = 0.756;
  dlugaTablica = ['a', 'b', 'c', 'd', 'e', 'f'];
  obiekt     = { imie: 'Jan', wiek: 25, miasto: 'Kraków' };

  ngOnInit() {
    console.log('ngOnInit – LifecyclePipes gotowy');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit – DOM wyrenderowany');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy – LifecyclePipes niszczony');
  }

  zmienWartosc() {
    // Zmieniamy wartość @Input() – spowoduje ngOnChanges w dziecku
    this.wartoscDlaDziecka.set('Zmieniono o ' + new Date().toLocaleTimeString());
  }
}
