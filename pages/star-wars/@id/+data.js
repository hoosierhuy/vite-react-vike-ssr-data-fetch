// https://vike.dev/data
export { data }

// The node-fetch package (which only works on the server-side) can be used since
// this file always runs on the server-side, see https://vike.dev/data#server-side
import fetch from 'node-fetch'

const data = async (pageContext) => {
  const response = await fetch(
    `https://brillout.github.io/star-wars/api/films/${pageContext.routeParams.id}.json`
  )

  let movie = await response.json()

  // We remove data we don't need because the data is passed to the client; we should
  // minimize what is sent over the network.
  movie = minimize(movie)

  return {
    movie,
    title: movie.title,
  }
}

function minimize(movie) {
  const { id, title, release_date, director, producer } = movie

  movie = { id, title, release_date, director, producer }

  return movie
}
