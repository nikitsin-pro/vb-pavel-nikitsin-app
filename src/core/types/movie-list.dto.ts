/** Query parameters for `/discover/movie` request */
export interface PopularMoviesParams {
  /** ISO 639-1 language code (default: en-US) */
  language?: string;
  /** Page number (default: 1, max: 500) */
  page?: number;
  /** Sort order (example: popularity.desc) */
  sort_by?: 'popularity.desc' | 'popularity.asc';
  /** Exclude adult content */
  include_adult?: boolean;
  /** Exclude movies with video content */
  include_video?: boolean;
  /** ISO 3166-1 region code (optional) */
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
  // Identification
  /** Unique TMDB movie ID */
  id: number;

  /** ISO 639-1 original language code */
  original_language: string;

  /** Original title of the movie */
  original_title: string;

  /** Localized movie title */
  title: string;

  /** Array of genre IDs related to the movie */
  genre_ids: number[];

  // Content
  /** Short description (overview) of the movie */
  overview: string;

  /** Whether the movie is marked as adult content */
  adult: boolean;

  /** Whether there is a video file associated with this movie */
  video: boolean;

  // Images
  /** Backdrop image path (relative to base URL) or null */
  backdrop_path: string | null;

  /** Poster image path (relative to base URL) or null */
  poster_path: string | null;

  // Metadata
  /** Release date in format YYYY-MM-DD or empty string if unknown */
  release_date: string;

  /** Popularity score (lifetime aggregate) */
  popularity: number;

  // User ratings
  /** Average user vote (rating) */
  vote_average: number;

  /** Total number of user votes */
  vote_count: number;
}
