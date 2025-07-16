import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environment';
import { MovieListResponse, PopularMoviesParams } from '../types/movie-list.dto';
import { MovieDetails } from '../types/movie-details.dto';

@Injectable({ providedIn: 'root' })
export class TmdbApi {
  private http = inject(HttpClient);

  loadMovieDetails(movieId: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${environment.tmdbApiURL}/movie/${movieId}`, { params: { language: 'en-US' } });
  }

  loadPopularMovies(requestParams: PopularMoviesParams = {}): Observable<MovieListResponse> {
    let params = new HttpParams()
      .set('page', (requestParams.page ?? 1).toString())
      .set('sort_by', requestParams.sort_by ?? 'popularity.desc');

    return this.http.get<MovieListResponse>(`${environment.tmdbApiURL}/discover/movie`, { params });
  }
}
