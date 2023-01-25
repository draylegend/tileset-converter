import { Route } from '@angular/router';

export default {
  path: '',
  loadComponent: () => import('./home-feature.component'),
} as Route;
