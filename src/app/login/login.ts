import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm = new FormGroup({
    username: new FormControl('emilys', Validators.required),  // domyślne dane z dummyjson
    password: new FormControl('emilyspass', Validators.required),
  });

  blad = '';
  ladowanie = false;
  sukces = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  zaloguj() {
    if (this.loginForm.invalid) return;

    this.ladowanie = true;
    this.blad = '';

    const { username, password } = this.loginForm.value;

    this.authService.login(username!, password!).subscribe({
      next: (data) => {
        this.authService.zapiszSesje(data);  // zapisujemy token
        this.sukces = true;
        this.ladowanie = false;
        // Po zalogowaniu przekieruj do CRUD (przykład chronionej trasy)
        setTimeout(() => this.router.navigate(['/crud']), 1500);
      },
      error: (err) => {
        this.blad = 'Błąd logowania: ' + (err.error?.message || err.message);
        this.ladowanie = false;
      }
    });
  }

  wyloguj() {
    this.authService.logout();
    this.sukces = false;
  }

  // Getter dla czytelności w HTML
  get zalogowany() { return this.authService.zalogowany(); }
  get uzytkownik() { return this.authService.uzytkownik(); }
}
