import { Component, inject, OnInit, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';

import { MovieListItem } from '../../../../core/types/movie.dto';
import { selectAllPopularMovies, selectPopularMoviesLoading } from '../../store/popular-movies.selectors';
import { PopularMoviesActions } from '../../store/popular-movies.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-popular-movies',
  imports: [AsyncPipe],
  templateUrl: './popular-movies.html',
  styleUrl: './popular-movies.scss',
})
export class PopularMovies implements OnInit {
  private store = inject(Store);

  protected movies$: Observable<MovieListItem[]> = this.store.select(selectAllPopularMovies);
  protected loading$: Observable<boolean> = this.store.select(selectPopularMoviesLoading);

  ngOnInit(): void {
    this.store.dispatch(PopularMoviesActions.loadPopularMovies({ page: 1 }));
  }
}
