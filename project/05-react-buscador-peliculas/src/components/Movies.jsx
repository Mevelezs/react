import { WithoutResults } from './WithoutMovies'
import { ListofMovies } from './ListofMovies'

export function Movies ({ movies, error }) {
  const hasMovies = movies?.length > 0
  return (
    <>
      {
        hasMovies
          ? <ListofMovies movies={movies} />
          : <WithoutResults />
      }
    </>
  )
}
