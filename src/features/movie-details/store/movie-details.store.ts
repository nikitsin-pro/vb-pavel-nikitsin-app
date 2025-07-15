import { Injectable, inject } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { TmdbApi } from '../../../core/services/tmdb-api';

import { MovieDetails } from '../../../core/types/movie-details.dto';
import { Observable, of, switchMap, tap } from 'rxjs';

export interface MovieDetailsState {
  movie: MovieDetails | null;
  loading: boolean;
  error: boolean;
}

@Injectable()
export class MovieDetailsStore extends ComponentStore<MovieDetailsState> {
  private api = inject(TmdbApi);

  constructor() {
    super({ movie: null, loading: false, error: false });
  }

  readonly loadMovie = this.effect((movieId$: Observable<string>) =>
    movieId$.pipe(
      switchMap((movieId: string) => {
        this.patchState({ loading: true, error: false });

        return this.api.loadMovieDetails(movieId).pipe(
          tap({
            next: (movie) => this.patchState({ movie, loading: false, error: false }),
            error: () => this.patchState({ movie: null, loading: false, error: true }),
          }),
        );
      }),
    ),
  );
}
