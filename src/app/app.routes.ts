import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { NotFound } from './shared/components/not-found/not-found';
import { authGuard } from './core/guards/auth/auth-guard';
import { notAuthGuard } from './core/guards/notAuth/not-auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [authGuard], component: Home, title: 'home' },
  {
    path: 'login',
    canActivate: [notAuthGuard],
    component: Login,
    title: 'Login',
  },
  {
    path: 'register',
    canActivate: [notAuthGuard],
    component: Register,
    title: 'Register',
  },
  { path: '**', component: NotFound, title: 'Not Found :(' },
];
