import { useEffect, useState } from "react";
import FeaturedMovie from "./components/FeaturedMovie";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import MovieRow from "./components/MovieRow";
import Tmdb from "./Tmdb";
import { MovieInfo } from "./types/MovieInfo";
import { MovieList } from "./types/MovieList";

export default function App() {
  const [movieList, setMovieList] = useState<MovieList[]>([]);
  const [featuredData, setFeaturedData] = useState<MovieInfo | null>(null);

  useEffect(() => {
    (async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);
      const originals = list.filter((item) => item.slug === "originals");
      const randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await Tmdb.getMovieInfo(String(chosen.id), "tv");
      if (chosenInfo) {
        setFeaturedData(chosenInfo);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists" style={{ marginTop: -150 }}>
        {movieList.map((item, index) => (
          <MovieRow title={item.title} items={item.items} key={index} />
        ))}
      </section>
      {movieList.length <= 0 && <Loading />}
      <Footer />
    </>
  );
}
