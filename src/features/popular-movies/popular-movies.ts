import { Component, inject, OnInit, signal } from '@angular/core';
import { TmdbApi } from '../../core/services/tmdb-api';
import { MovieListItem } from '../../core/types/movie.dto';

@Component({
  selector: 'app-popular-movies',
  imports: [],
  templateUrl: './popular-movies.html',
  styleUrl: './popular-movies.scss',
})
export class PopularMovies implements OnInit {
  private readonly api = inject(TmdbApi);

  protected movies = signal<MovieListItem[]>([]);

  ngOnInit(): void {
    this.api.loadPopularMovies().subscribe((response) => this.movies.set(response.results));
  }
}
