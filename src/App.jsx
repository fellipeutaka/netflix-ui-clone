import React, { useState, useEffect } from 'react'
import Tmdb from './Tmdb'
import FeaturedMovie from './components/FeaturedMovie'
import MovieRow from './components/MovieRow'
import Header from './components/Header'

export default function App() {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(() => {
    (async () => {
      const list = await Tmdb.getHomeList()
      setMovieList(list)
      // Featured
      const originals = list.filter(item => item.slug === 'originals')
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      const chosen = originals[0].items.results[randomChosen]
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
    })()
  }, [])

  return (
    <div className="page">
      <Header />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists" style={{ marginTop: -150 }}>
        {movieList.map((item, index) => (
          <MovieRow title={item.title} items={item.items} key={index} />
        ))}
      </section>
    </div>
  )
}