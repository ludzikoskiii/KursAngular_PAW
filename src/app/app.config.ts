import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // potrzebne do wywołań API (lekcje 7-10)

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),   // rejestracja routera z naszymi trasami
    provideHttpClient()      // rejestracja HttpClient - wymagane do HTTP requests
  ]
};
