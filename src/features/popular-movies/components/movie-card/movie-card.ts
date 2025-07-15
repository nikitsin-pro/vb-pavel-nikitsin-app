import { Component, Input, input, Signal } from '@angular/core';
import { MovieListItem } from '../../../../core/types/movie-list.dto';
import { RouterModule } from '@angular/router';

interface MovieListCardModel {
  id: number;
  title: string;
  imageUrl?: string;
  releaseDate: string;
  voteAverage: number;
}

@Component({
  selector: 'app-movie-card',
  imports: [RouterModule],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCard {
  @Input({
    required: true,
    transform: (value: MovieListItem) => ({
      id: value.id,
      title: value.title,
      imageUrl: value.poster_path ? `https://image.tmdb.org/t/p/w92/${value.poster_path}` : undefined,
      releaseDate: value.release_date,
      voteAverage: value.vote_average.toFixed(1),
    }),
  })
  movie!: MovieListCardModel;
}
