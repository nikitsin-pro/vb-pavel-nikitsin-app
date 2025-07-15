import { Routes } from '@angular/router';

import { MovieDetailsStore } from './store/movie-details.store';
import { MovieDetailsPanel } from './movie-details-panel/movie-details-panel';

export const movieDetailsRoutes: Routes = [
  {
    path: '',
    component: MovieDetailsPanel,
    providers: [MovieDetailsStore],
  },
  { path: '**', redirectTo: '' },
];
