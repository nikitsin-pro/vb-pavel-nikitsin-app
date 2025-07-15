import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { MovieListItem } from '../../../../core/types/movie-list.dto';
import { PopularMoviesActions } from '../../store/popular-movies.actions';
import {
  selectAllPopularMovies,
  selectPopularMoviesLoading,
  selectPopularMoviesError,
} from '../../store/popular-movies.selectors';
import { PopularMovies } from './popular-movies';

describe('PopularMovies Component', () => {
  let fixture: ComponentFixture<PopularMovies>;
  let store: MockStore;

  const mockMovies: MovieListItem[] = [
    {
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
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularMovies],
      providers: [
        provideMockStore({
          selectors: [
            { selector: selectAllPopularMovies, value: mockMovies },
            { selector: selectPopularMoviesLoading, value: false },
            { selector: selectPopularMoviesError, value: false },
          ],
        }),
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PopularMovies);
    store = TestBed.inject(MockStore);
  });

  it('should create component', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should dispatch loadPopularMovies on init', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    fixture.detectChanges();
    expect(dispatchSpy).toHaveBeenCalledWith(PopularMoviesActions.loadPopularMovies({ page: 1 }));
  });

  it('should show movie card when movies exist', () => {
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(By.css('.title')).nativeElement as HTMLElement;
    expect(titleElement.textContent).toContain('Popular movies');

    const movieCards = fixture.debugElement.queryAll(By.css('app-movie-card'));
    expect(movieCards.length).toBe(1);
  });

  it('should show loading when loading$ is true', () => {
    store.overrideSelector(selectPopularMoviesLoading, true);
    fixture.detectChanges();

    const placeholder = fixture.debugElement.query(By.css('.placeholder-text')).nativeElement as HTMLElement;
    expect(placeholder.textContent).toContain('Loading...');
  });

  it('should show error when error$ is true', () => {
    store.overrideSelector(selectPopularMoviesLoading, false);
    store.overrideSelector(selectPopularMoviesError, true);
    fixture.detectChanges();

    const placeholder = fixture.debugElement.query(By.css('.placeholder-text')).nativeElement as HTMLElement;
    expect(placeholder.textContent).toContain('Something went wrong');
  });
});
