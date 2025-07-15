import { popularMoviesReducer, initialState, adapter } from './popular-movies.reducer';
import { PopularMoviesActions } from './popular-movies.actions';
import { MovieListItem } from '../../../core/types/movie-list.dto';

describe('popularMoviesReducer', () => {
  it('should set loading true on loadPopularMovies', () => {
    const action = PopularMoviesActions.loadPopularMovies({ page: 1 });
    const state = popularMoviesReducer(initialState, action);

    expect(state.loading).toBeTrue();
    expect(state.error).toBeFalse();
  });

  it('should set movies and loading false on loadPopularMoviesSuccess', () => {
    const movie: MovieListItem = {
      id: 1,
      original_language: 'en',
      original_title: 'How to Train Your Dragon',
      title: 'How to Train Your Dragon',
      genre_ids: [14],
      overview: 'On the rugged isle of Berk, where Vikings and dragons have been bitter enemies...',
      adult: false,
      video: false,
      backdrop_path: '/ovZasZ9EeZcp6UsrElkQ63hFCd.jpg',
      poster_path: '/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg',
      release_date: '2025-06-06',
      popularity: 175.5827,
      vote_average: 7.9,
      vote_count: 654,
    };

    const action = PopularMoviesActions.loadPopularMoviesSuccess({
      results: [movie],
      page: 1,
      total_pages: 1,
      total_results: 1,
    });

    const state = popularMoviesReducer(initialState, action);

    const { selectAll } = adapter.getSelectors();
    const allMovies = selectAll({ ...state, entities: state.entities, ids: state.ids });

    expect(state.loading).toBeFalse();
    expect(state.error).toBeFalse();
    expect(state.page).toBe(1);
    expect(state.total_pages).toBe(1);
    expect(state.total_results).toBe(1);

    expect(allMovies.length).toBe(1);
    expect(allMovies[0].id).toBe(1);
    expect(allMovies[0].original_language).toBe('en');
    expect(allMovies[0].original_title).toBe('How to Train Your Dragon');
    expect(allMovies[0].title).toBe('How to Train Your Dragon');
    expect(allMovies[0].genre_ids).toEqual([14]);
    expect(allMovies[0].overview).toBe(
      'On the rugged isle of Berk, where Vikings and dragons have been bitter enemies...',
    );
    expect(allMovies[0].adult).toBeFalse();
    expect(allMovies[0].video).toBeFalse();
    expect(allMovies[0].backdrop_path).toBe('/ovZasZ9EeZcp6UsrElkQ63hFCd.jpg');
    expect(allMovies[0].poster_path).toBe('/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg');
    expect(allMovies[0].release_date).toBe('2025-06-06');
    expect(allMovies[0].popularity).toBe(175.5827);
    expect(allMovies[0].vote_average).toBe(7.9);
    expect(allMovies[0].vote_count).toBe(654);
  });

  it('should set error true on loadPopularMoviesFailure', () => {
    const action = PopularMoviesActions.loadPopularMoviesFailure({ error: { message: 'Error' } as any });
    const state = popularMoviesReducer(initialState, action);

    expect(state.loading).toBeFalse();
    expect(state.error).toBeTrue();
  });
});
