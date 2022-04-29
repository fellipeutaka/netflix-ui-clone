import { MovieInfo } from "./types/MovieInfo";
import { MovieItem } from "./types/MovieItem";

const API_KEY = "34ace716e639973b381f7886b6a7cec7";
const API_BASE = "https://api.themoviedb.org/3";

async function basicFetch<T>(endpoint: string): Promise<T> {
  const req = await fetch(`${API_BASE}${endpoint}&api_key=${API_KEY}`);
  return await req.json();
}

const tmdb = {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais da Netflix",
        items: await basicFetch<MovieItem>(
          `/discover/tv?with_network=213&language=pt-BR`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: await basicFetch<MovieItem>(`/trending/all/week?language=pt-BR`),
      },
      {
        slug: "toprated",
        title: "Em alta",
        items: await basicFetch<MovieItem>(`/movie/top_rated?language=pt-BR`),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch<MovieItem>(
          `/discover/movie?with_genres=28&language=pt-BR`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch<MovieItem>(
          `/discover/movie?with_genres=35&language=pt-BR`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch<MovieItem>(
          `/discover/movie?with_genres=27&language=pt-BR`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch<MovieItem>(
          `/discover/movie?with_genres=10749&language=pt-BR`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch<MovieItem>(
          `/discover/movie?with_genres=99&language=pt-BR`
        ),
      },
    ];
  },
  getMovieInfo: async (movieId: string, type: string) => {
    if (movieId) {
      switch (type) {
        case "movie":
          return await basicFetch<MovieInfo>(
            `/movie/${movieId}?language=pt-BR`
          );
        case "tv":
          return await basicFetch<MovieInfo>(`/tv/${movieId}?language=pt-BR`);
        default:
          return null;
      }
    }
  },
};

export default tmdb;
