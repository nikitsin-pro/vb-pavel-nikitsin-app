import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, props } from '@ngrx/store';

import { MovieListResponse, PopularMoviesParams } from '../../../core/types/movie-list.dto';

export const PopularMoviesActions = createActionGroup({
  source: 'Popular Movies',
  events: {
    'Load Popular Movies': props<PopularMoviesParams>(),
    'Load Popular Movies Success': props<MovieListResponse>(),
    'Load Popular Movies Failure': props<{ error: HttpErrorResponse }>(),
  },
});
