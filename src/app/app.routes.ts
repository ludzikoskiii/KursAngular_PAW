import { Routes } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { Zmienne } from './zmienne/zmienne';
import { Signal } from './signal/signal';
import { NotFound } from './not-found/not-found';
import { ControlFlow } from './control-flow/control-flow';
import { NgClassStyle } from './ng-class-style/ng-class-style';
import { Forms } from './forms/forms';
import { ApiGet } from './api-get/api-get';
import { ApiPost } from './api-post/api-post';
import { ApiPutDelete } from './api-put-delete/api-put-delete';
import { Crud } from './crud/crud';
import { Serwis } from './serwis/serwis';
import { SignalForm } from './signal-form/signal-form';
import { Login } from './login/login';
import { LifecyclePipes } from './lifecycle-pipes/lifecycle-pipes';

export const routes: Routes = [
    { path: 'zmienne',         component: Zmienne },         // Lekcja 1: typy zmiennych w TS
    { path: 'databinding',     component: DataBinding },      // Lekcja 2: wiązanie danych
    { path: 'signal',          component: Signal },           // Lekcja 3: sygnały i routing
    { path: 'control-flow',    component: ControlFlow },      // Lekcja 4: @if @else @for
    { path: 'ng-class-style',  component: NgClassStyle },     // Lekcja 5: ngClass i ngStyle
    { path: 'forms',           component: Forms },            // Lekcja 6: formularze + walidacja
    { path: 'api-get',         component: ApiGet },           // Lekcja 7: pobieranie z API (GET)
    { path: 'api-post',        component: ApiPost },          // Lekcja 8: wysyłanie do API (POST)
    { path: 'api-put-delete',  component: ApiPutDelete },     // Lekcja 9: edycja i usuwanie (PUT/DELETE)
    { path: 'crud',            component: Crud },             // Lekcja 10: pełne CRUD + Reactive Form
    { path: 'serwis',          component: Serwis },           // Lekcja 11: serwisy (DI)
    { path: 'signal-form',     component: SignalForm },       // Lekcja 12: Signal Form + walidacja
    { path: 'login',           component: Login },            // Lekcja 13/14: login + guard
    { path: 'lifecycle-pipes', component: LifecyclePipes },   // Lekcja 16: lifecycle + Pipes
    { path: '**',              component: NotFound }          // 404 - nieznana trasa
];
