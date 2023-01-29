import {
  QueryFunctionContext,
  useQueries,
  useQuery,
} from "@tanstack/react-query";
import { MovieInfo } from "./@types/MovieInfo";
import type { MovieItem } from "./@types/MovieItem";
import { FeaturedMovie } from "./components/FeaturedMovie";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Loading } from "./components/Loading";
import { MovieRow } from "./components/MovieRow";
import { api } from "./lib/axios";
import { sample } from "./utils/sample";

export function App() {
  const movieList = useQueries({
    queries: [
      {
        queryKey: ["/discover/tv?with_network=213&language=pt-BR"],
        queryFn: async ({ queryKey, signal }: QueryFunctionContext) => {
          const { data: items } = await api.get<MovieItem>(
            String(queryKey[0]),
            {
              signal,
            }
          );
          return {
            slug: "originals",
            title: "Originais da Netflix",
            items,
          };
        },
      },
      {
        queryKey: ["/trending/all/week?language=pt-BR"],
        queryFn: async ({ queryKey, signal }: QueryFunctionContext) => {
          const { data: items } = await api.get<MovieItem>(
            String(queryKey[0]),
            {
              signal,
            }
          );
          return { slug: "trending", title: "Recomendados para você", items };
        },
      },
      {
        queryKey: ["/movie/top_rated?language=pt-BR"],
        queryFn: async ({ queryKey, signal }: QueryFunctionContext) => {
          const { data: items } = await api.get<MovieItem>(
            String(queryKey[0]),
            {
              signal,
            }
          );
          return { slug: "toprated", title: "Em alta", items };
        },
      },
      {
        queryKey: ["/discover/movie?with_genres=28&language=pt-BR"],
        queryFn: async ({ queryKey, signal }: QueryFunctionContext) => {
          const { data: items } = await api.get<MovieItem>(
            String(queryKey[0]),
            {
              signal,
            }
          );
          return { slug: "action", title: "Ação", items };
        },
      },
      {
        queryKey: ["/discover/movie?with_genres=35&language=pt-BR"],
        queryFn: async ({ queryKey, signal }: QueryFunctionContext) => {
          const { data: items } = await api.get<MovieItem>(
            String(queryKey[0]),
            {
              signal,
            }
          );
          return { slug: "comedy", title: "Comédia", items };
        },
      },
      {
        queryKey: ["/discover/movie?with_genres=27&language=pt-BR"],
        queryFn: async ({ queryKey, signal }: QueryFunctionContext) => {
          const { data: items } = await api.get<MovieItem>(
            String(queryKey[0]),
            {
              signal,
            }
          );
          return { slug: "horror", title: "Terror", items };
        },
      },
      {
        queryKey: ["/discover/movie?with_genres=10749&language=pt-BR"],
        queryFn: async ({ queryKey, signal }: QueryFunctionContext) => {
          const { data: items } = await api.get<MovieItem>(
            String(queryKey[0]),
            {
              signal,
            }
          );
          return { slug: "romance", title: "Romance", items };
        },
      },
      {
        queryKey: ["/discover/movie?with_genres=99&language=pt-BR"],
        queryFn: async ({ queryKey, signal }: QueryFunctionContext) => {
          const { data: items } = await api.get<MovieItem>(
            String(queryKey[0]),
            {
              signal,
            }
          );
          return { slug: "documentary", title: "Documentários", items };
        },
      },
    ],
  });
  const randomShow = sample(movieList[0].data?.items.results);
  const featuredShow = useQuery({
    queryKey: ["featuredShow"],
    queryFn: async ({ signal }: QueryFunctionContext) => {
      const { data } = await api.get<MovieInfo>(
        `/tv/${randomShow?.id}?language=pt-BR`,
        {
          signal,
        }
      );
      return data;
    },
    enabled: Boolean(randomShow),
  });

  if (movieList.some((movie) => movie.isLoading) || featuredShow.isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <FeaturedMovie item={featuredShow.data!} />
      <section style={{ marginTop: "-9rem" }}>
        {movieList.map(({ data }) => (
          <MovieRow key={data!.slug} title={data!.title} items={data!.items} />
        ))}
      </section>
      <Footer />
    </>
  );
}
