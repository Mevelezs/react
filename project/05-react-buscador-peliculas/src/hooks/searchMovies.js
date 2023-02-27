
export async function searchMovies (search) {
  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=7980bc1d&s=${search}`)
    const data = await response.json()

    return data.Search?.map(
      movie => ({
        id: movie.imdbID,
        title: movie.Title,
        poster: movie.Poster,
        year: movie.Year
      })
    )
  } catch (error) {
    throw new Error(error)
  }
}
