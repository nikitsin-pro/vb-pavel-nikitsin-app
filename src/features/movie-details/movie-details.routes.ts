import { Routes } from '@angular/router';

import { MovieDetailsPanel } from './movie-details-panel/movie-details-panel';

export const movieDetailsRoutes: Routes = [
  {
    path: '',
    component: MovieDetailsPanel,
  },
  { path: '**', redirectTo: '' },
];
