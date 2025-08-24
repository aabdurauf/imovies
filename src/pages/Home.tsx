import React from "react"
import { Hero } from "../components"
import { useGetShowsQuery } from "../features/TMDB"

const Home = () => {
  const { data, isLoading, isError } = useGetShowsQuery({
    category: "movie",
    type: "popular",
    page: 1
  })

  if (isLoading) {
    return "Loading"
  }

  if (isError) {
    return "Error"
  }

  const popularMovies = data.results.slice(0, 5)

  return (
    <React.Fragment>
      <Hero movies={popularMovies} />
    </React.Fragment>
  )
}

export default Home