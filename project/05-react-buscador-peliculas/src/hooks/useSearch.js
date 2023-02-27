import { useCallback, useEffect, useRef, useState } from 'react'
import debounce from 'just-debounce-it'

export function useSearch ({ getMovies }) {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFistInput = useRef(true)

  const debounceGetMovies = useCallback( // uso del useCallback para ejecutar la función solo cuando cambie la dependencia
    debounce(search => { // funcion que permite ejecutar getMovies acda 300ms (debounce es necesario para evitar que cada que se cambie el input haga una petición a la api y ademas que la llegada de los datos sea ordenada ). Libreria externa
      getMovies(search)
    }, 300),
    [getMovies]
  )

  const handleonChange = (e) => {
    const newQuery = e.target.value
    if (newQuery.startsWith(' ')) return
    setSearch(newQuery)
    debounceGetMovies(newQuery)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies(search)
  }

  useEffect(() => {
    // useRef como validador de la primera entrada (guarda la referncia del input en la primera entrada que es vacio y si lo es guarda el valor en el current y asi se evalua si la sentencia es verdadera retorna sino no hace nada)
    if (isFistInput.current) {
      isFistInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede mostrar una pelicula vacia')
      return
    } else if (search.length < 3) {
      setError('Minimo tres Caracteres')
      return
    }
    setError(null)
  }, [search])

  return {
    search,
    error,
    handleonChange,
    handleSubmit
  }
}
