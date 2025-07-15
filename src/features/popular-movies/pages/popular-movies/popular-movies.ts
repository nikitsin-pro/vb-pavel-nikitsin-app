import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MovieListItem } from '../../../../core/types/movie-list.dto';
import {
  selectAllPopularMovies,
  selectPopularMoviesLoading,
  selectPopularMoviesError,
} from '../../store/popular-movies.selectors';
import { PopularMoviesActions } from '../../store/popular-movies.actions';
import { MovieCard } from '../../components/movie-card/movie-card';

@Component({
  selector: 'app-popular-movies',
  imports: [AsyncPipe, MovieCard, RouterOutlet],
  templateUrl: './popular-movies.html',
  styleUrl: './popular-movies.scss',
})
export class PopularMovies implements OnInit {
  private store = inject(Store);

  protected movies$: Observable<MovieListItem[]> = this.store.select(selectAllPopularMovies);
  protected loading$: Observable<boolean> = this.store.select(selectPopularMoviesLoading);
  protected error$: Observable<boolean> = this.store.select(selectPopularMoviesError);

  ngOnInit(): void {
    this.store.dispatch(PopularMoviesActions.loadPopularMovies({ page: 1 }));
  }
}
