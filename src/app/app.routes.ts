import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/shorten/shorten-page.component').then(
        (m) => m.ShortenPageComponent
      ),
  },
  {
    path: 'details/:shortCode',
    loadComponent: () =>
      import('./features/details/details-page.component').then(
        (m) => m.DetailsPageComponent
      ),
  },
];
