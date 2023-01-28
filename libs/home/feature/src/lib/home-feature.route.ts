import { Route } from '@angular/router';
import { HomeService } from '@tileset-converter/home/domain';

export default {
  path: '',
  loadComponent: () => import('./home-feature.component'),
  providers: [HomeService],
} as Route;
