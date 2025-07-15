/** Full movie details returned from /movie/{movie_id} endpoint */
export interface MovieDetails {
  /** Unique movie ID in TMDB */
  id: number;

  /** Title localized according to the language parameter */
  title: string;

  /** Short movie summary */
  overview: string;

  /** Current movie status (e.g., Released, Post Production) */
  status: string;

  /** Homepage URL of the movie (if set) */
  homepage: string | null;

  /** Movie release date in YYYY-MM-DD format */
  release_date: string;

  /** Movie runtime in minutes */
  runtime: number | null;

  /** Whether the movie is marked as adult content */
  adult: boolean;

  /** Average user vote (rating) from 0.0 to 10.0 */
  vote_average: number;

  /** Total number of user votes */
  vote_count: number;

  /** Movie budget in USD */
  budget: number;

  /** Movie revenue in USD */
  revenue: number;

  /** Path to poster image */
  poster_path: string | null;

  /** Path to backdrop image */
  backdrop_path: string | null;

  /** Array of genres */
  genres: Genre[];
}

/** Genre information */
export interface Genre {
  id: number;

  name: string;
}
