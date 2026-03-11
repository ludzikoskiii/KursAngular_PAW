import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-form',
  imports: [FormsModule],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.css',
})
export class SignalForm {
  // Pola formularza jako sygnały
  imie   = signal('');
  email  = signal('');
  haslo  = signal('');

  // Flaga: czy formularz był próbowany wysłany (do pokazywania błędów)
  proba = signal(false);

  // COMPUTED – walidatory oparte na signalach
  // Każdy computed automatycznie przelicza się gdy zmieni się bazowy signal
  imieBlad = computed(() => {
    if (!this.proba()) return '';              // nie pokazuj błędów przed próbą
    if (!this.imie()) return 'Imię wymagane';
    if (this.imie().length < 3) return 'Min. 3 znaki';
    return '';
  });

  emailBlad = computed(() => {
    if (!this.proba()) return '';
    if (!this.email()) return 'Email wymagany';
    // prosta walidacja email przez regex
    if (!/\S+@\S+\.\S+/.test(this.email())) return 'Niepoprawny email';
    return '';
  });

  hasloBlad = computed(() => {
    if (!this.proba()) return '';
    if (!this.haslo()) return 'Hasło wymagane';
    if (this.haslo().length < 6) return 'Min. 6 znaków';
    return '';
  });

  // COMPUTED – formularz jest poprawny gdy brak błędów
  czyPoprawny = computed(() =>
    !this.imieBlad() && !this.emailBlad() && !this.hasloBlad() &&
    !!this.imie() && !!this.email() && !!this.haslo()
  );

  wyslij() {
    this.proba.set(true); // włączamy walidację

    if (!this.czyPoprawny()) return; // zatrzymujemy jeśli błędy

    alert(`✅ Wysłano!\nImię: ${this.imie()}\nEmail: ${this.email()}`);
  }
}
