import withResults from '../mocks/info.json'

export function useMovies () {
  const movies = withResults.Search

  const mapedMovies = movies.map(movie => (
    {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }
  ))
  return { movies: mapedMovies }
}
