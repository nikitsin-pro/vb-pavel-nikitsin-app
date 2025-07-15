import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'popular',
    loadChildren: () => import('../features/popular-movies/popular-movies.routes').then((m) => m.popularMoviesRoutes),
  },
  { path: '**', redirectTo: 'popular' },
];
