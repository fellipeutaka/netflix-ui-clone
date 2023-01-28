import type { MovieItem } from "./MovieItem";

export type MovieList = {
  slug: string;
  title: string;
  items: MovieItem;
};
