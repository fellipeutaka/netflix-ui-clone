import type { Movie } from "./Movie";

export type MovieItem = {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
};
