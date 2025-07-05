import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { NotFound } from './shared/components/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'home' },
  { path: 'login', component: Login, title: 'Login' },
  { path: 'register', component: Register, title: 'Register' },
  { path: '**', component: NotFound, title: 'Not Found :(' },
];
