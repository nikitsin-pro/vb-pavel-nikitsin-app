import { createFeatureSelector, createSelector } from '@ngrx/store';

import { adapter, POPULAR_MOVIES_FEATURE_KEY, PopularMoviesState } from './popular-movies.reducer';

export const selectPopularMoviesState = createFeatureSelector<PopularMoviesState>(POPULAR_MOVIES_FEATURE_KEY);

const { selectAll } = adapter.getSelectors();

export const selectAllPopularMovies = createSelector(selectPopularMoviesState, selectAll);

export const selectPopularMoviesLoading = createSelector(selectPopularMoviesState, (state) => state.loading);

export const selectPopularMoviesError = createSelector(selectPopularMoviesState, (state) => state.error);

export const selectPopularMoviesPagination = createSelector(selectPopularMoviesState, (state) => ({
  page: state.page,
  total_pages: state.total_pages,
  total_results: state.total_results,
}));
