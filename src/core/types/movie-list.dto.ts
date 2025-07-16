/** Query parameters for `/discover/movie` request */
export interface PopularMoviesParams {
  /** Language code (default: en-US) */
  language?: string;

  /** Page number */
  page?: number;

  /** Sort order */
  sort_by?: 'popularity.desc' | 'popularity.asc';

  /** Include adult content */
  include_adult?: boolean;

  /** Include movies with video content */
  include_video?: boolean;

  /** Region code */
  region?: string;
}

/** Root response from `/discover/movie` endpoint */
export interface MovieListResponse {
  /** Current page number */
  page: number;

  /** List of movie search results */
  results: MovieListItem[];

  /** Total number of pages available */
  total_pages: number;

  /** Total number of results found */
  total_results: number;
}

/** Single movie item returned in MovieListResponse.results */
export interface MovieListItem {
  /** Unique TMDB movie ID */
  id: number;

  /** Original language code */
  original_language: string;

  /** Original title of the movie */
  original_title: string;

  /** Localized movie title */
  title: string;

  /** Array of genre IDs related to the movie */
  genre_ids: number[];

  /** Short description of the movie */
  overview: string;

  /** Whether the movie is marked as adult content */
  adult: boolean;

  /** Whether there is a video file associated with this movie */
  video: boolean;

  /** Backdrop image path (relative to base URL) or null */
  backdrop_path: string | null;

  /** Poster image path (relative to base URL) or null */
  poster_path: string | null;

  /** Release date in format YYYY-MM-DD or empty string */
  release_date: string;

  /** Popularity score */
  popularity: number;

  /** Average user vote (rating) */
  vote_average: number;

  /** Total number of user votes */
  vote_count: number;
}
