import { Component } from '@angular/core';

@Component({
  selector: 'app-zmienne',
  imports: [],
  templateUrl: './zmienne.html',
  styleUrl: './zmienne.css',
})
export class Zmienne {
  // ======= TYPY PODSTAWOWE W TYPESCRIPT =======

  // STRING - tekst (można podać typ explicite lub pozwolić TS wywnioskować)
  nazwaKursu: string = 'Angular 21';
  wersjaKursu = 'v.21';            // TS sam wywnioskuje typ string

  // NUMBER - liczby całkowite i zmiennoprzecinkowe
  no: number = 121;
  cenaProdutu = 1200.50;           // TS wywnioskuje typ number

  // BOOLEAN - wartość logiczna true/false
  jestAktywny: boolean = false;
  jestObecny = true;               // TS wywnioskuje typ boolean

  // DATE - obiekt daty JS
  obecnaData: Date = new Date();

  // ARRAY (tablica) - można definiować jako typ[] lub Array<typ>
  listaMiast: string[] = ['Wwa', 'Krk', 'Zako'];
  noAray: number[] = [111, 222, 333, 444];

  // OBJECT - obiekt z właściwościami (brak typowania = typ any)
  uczenObj = {
    imie: 'Kuba',
    numer: '67676767',
    email: 'jgorczowski23@zs1.nowotarski.edu.pl'
  };

  // ARRAY OF OBJECTS - tablica obiektów
  uczenList = [
    { imie: 'ABC', miasto: 'Marusyna' },
    { imie: 'CBA', miasto: 'Sierockie' },
    { imie: 'DER', miasto: 'Łapszanka' }
  ];
}
