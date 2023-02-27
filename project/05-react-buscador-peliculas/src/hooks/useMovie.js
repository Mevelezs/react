import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from './searchMovies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const previousSearch = useRef(search) // use ref para guarar el valor de la busqueda actual

  const getMovies = useCallback(async (search) => { // useCallback == useMemo (usando el useCallback es más sencillo escribir la memorización si son funciones), quí se usa para que la función no se cree cada vex que se renderice el componente
    if (search === previousSearch.current) return // uso del valor del useRef para que no se busque de nuevo si no se ha cambiado el input
    try {
      setError(null)
      setLoading(true)
      previousSearch.current = search
      const newMovies = await searchMovies(search)
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => { // el useMemo encapsula lo que tiene adentro y lo ejecuta solo cuando cambian sus dependencias (aqí se usa para que solo se ejecute se ejecute el sort cuando cambian las movies y el mismo sort)
    const sortedM = sort && movies// sort para organizar por nombre
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) // el localCompare tiene en cuenta las tildes y otros caracteres
      : movies
    return sortedM
  }, [movies, sort])

  return { movies: sortedMovies, getMovies, loading, error, sortedMovies }
}
