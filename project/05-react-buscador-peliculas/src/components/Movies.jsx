import { WitoutResults } from './WithoutMovies'
import { ListofMovies } from './ListofMuvies'

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    <>
      {
        hasMovies
          ? <ListofMovies movies={movies} />
          : <WitoutResults />
      }
    </>
  )
}
