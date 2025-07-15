import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { environment } from '../../environment';
import { MovieListResponse, PopularMoviesParams } from '../types/movie.dto';

@Injectable({ providedIn: 'root' })
export class TmdbApi {
  private http = inject(HttpClient);

  searchMovies(query: string, page = 1) {
    const params = new HttpParams()
      .set('query', query)
      .set('page', page.toString())
      .set('include_adult', 'false')
      .set('language', 'en-US');

    return this.http.get(`${environment.tmdbApiURL}/search/movie`, { params });
  }

  loadPopularMovies(requestParams: PopularMoviesParams = {}) {
    let params = new HttpParams()
      .set('include_adult', (requestParams.include_adult ?? false).toString())
      .set('include_video', (requestParams.include_video ?? false).toString())
      .set('page', (requestParams.page ?? 1).toString())
      .set('sort_by', requestParams.sort_by ?? 'popularity.desc');

    if (requestParams.region) params = params.set('region', requestParams.region);

    return this.http.get<MovieListResponse>(`${environment.tmdbApiURL}/discover/movie`, { params });
  }
}
