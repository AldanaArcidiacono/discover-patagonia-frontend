import { Routes } from '@angular/router';
import { HomeComponent } from './destinations/views/home/home.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => HomeComponent,
  },
];
