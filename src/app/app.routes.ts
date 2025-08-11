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
    path: 'analytics',
    loadComponent: () =>
      import('./features/analytics/analytics-page.component').then(
        (m) => m.AnalyticsPageComponent
      ),
  },
];
