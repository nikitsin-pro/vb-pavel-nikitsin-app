import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { POPULAR_MOVIES_FEATURE_KEY, popularMoviesReducer } from './store/popular-movies.reducer';
import { PopularMoviesEffects } from './store/popular-movies.effects';
import { PopularMovies } from './pages/popular-movies/popular-movies';

export const popularMoviesRoutes: Routes = [
  {
    path: '',
    component: PopularMovies,
    providers: [provideState(POPULAR_MOVIES_FEATURE_KEY, popularMoviesReducer), provideEffects(PopularMoviesEffects)],
    children: [
      {
        path: ':id',
        loadChildren: () => import('../movie-details/movie-details.routes').then((m) => m.movieDetailsRoutes),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
