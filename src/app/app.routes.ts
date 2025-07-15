import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'popular',
    loadComponent: () => import('../features/popular-movies/popular-movies').then((c) => c.PopularMovies),
  },
  { path: '**', redirectTo: 'popular' },
];
