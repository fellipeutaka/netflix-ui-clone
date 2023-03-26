import type { MovieItem } from "@/@types/MovieItem";

import { MovieRow } from "../MovieRow";
import { MovieListContainer } from "./styles";

export type MovieListProps = {
  data: {
    title: string;
    slug: string;
    items: MovieItem;
  }[];
};

export function MovieList({ data }: MovieListProps) {
  return (
    <MovieListContainer>
      {data.map((movie) => (
        <MovieRow key={movie.slug} title={movie.title} items={movie.items} />
      ))}
    </MovieListContainer>
  );
}
