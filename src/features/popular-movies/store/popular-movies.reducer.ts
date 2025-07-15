import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { MovieListItem } from '../../../core/types/movie.dto';
import { PopularMoviesActions } from './popular-movies.actions';

export const POPULAR_MOVIES_FEATURE_KEY = 'popularMovies';

export type PopularMoviesState = EntityState<MovieListItem> & {
  page: number;
  total_pages: number;
  total_results: number;
  loading: boolean;
  error: boolean;
};

export const adapter = createEntityAdapter<MovieListItem>({
  selectId: (movie) => movie.id,
});

export const initialState: PopularMoviesState = adapter.getInitialState({
  page: 1,
  total_pages: 0,
  total_results: 0,
  loading: false,
  error: false,
});

export const popularMoviesReducer = createReducer(
  initialState,
  on(PopularMoviesActions.loadPopularMovies, (state) => ({
    ...state,
    loading: true,
    error: false,
  })),

  on(PopularMoviesActions.loadPopularMoviesSuccess, (state, payload) =>
    adapter.setAll(payload.results, {
      ...state,
      page: payload.page,
      total_pages: payload.total_pages,
      total_results: payload.total_results,
      loading: false,
      error: false,
    }),
  ),

  on(PopularMoviesActions.loadPopularMoviesFailure, (state) => ({
    ...state,
    loading: false,
    error: true,
  })),
);
