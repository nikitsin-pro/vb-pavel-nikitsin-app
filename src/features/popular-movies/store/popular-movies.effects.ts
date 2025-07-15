import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PopularMoviesActions } from './popular-movies.actions';
import { catchError, map, switchMap, of } from 'rxjs';

import { TmdbApi } from '../../../core/services/tmdb-api';
import { MovieListResponse } from '../../../core/types/movie-list.dto';

@Injectable()
export class PopularMoviesEffects {
  private actions$ = inject(Actions);
  private tmdbApi = inject(TmdbApi);

  loadPopularMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PopularMoviesActions.loadPopularMovies),
      switchMap(({ page }) =>
        this.tmdbApi.loadPopularMovies({ page }).pipe(
          map((response: MovieListResponse) =>
            PopularMoviesActions.loadPopularMoviesSuccess({
              results: response.results,
              page: response.page,
              total_pages: response.total_pages,
              total_results: response.total_results,
            }),
          ),
          catchError((error) => of(PopularMoviesActions.loadPopularMoviesFailure({ error }))),
        ),
      ),
    ),
  );
}
