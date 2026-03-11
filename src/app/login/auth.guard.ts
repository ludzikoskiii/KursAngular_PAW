import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

// Guard – funkcja sprawdzająca czy użytkownik ma dostęp do trasy
// CanActivateFn to typ funkcji guardu (nowszy, funkcyjny styl Angular)
export const authGuard: CanActivateFn = (route, state) => {
  const auth   = inject(AuthService); // inject() = DI poza konstruktorem
  const router = inject(Router);

  if (auth.zalogowany()) {
    return true;                      // dostęp przyznany
  }

  // Brak dostępu – przekieruj do logowania
  router.navigate(['/login']);
  return false;
};
