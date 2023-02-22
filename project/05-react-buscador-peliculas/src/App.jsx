import { useEffect, useState } from 'react'
import './App.css'
import Demo from './components/demo/Demo'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovie'

function App () {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleonChange = (e) => {
    const newQuery = e.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)
  }

  useEffect(() => {
    if (query === '') {
      setError('No se puede mostrar una pelicula vacia')
      return
    } else if (query.length < 3) {
      setError('Minimo tres Caracteres')
      return
    }
    setError(null)
  }, [query])
  return (
    <>
      <header>
        <h1> Movie Search  Engine</h1>
        <form className='form'>
          <input
            type='text'
            placeholder='Matrix, Avengers, Star Wars...'
            onChange={handleonChange}
            name='query'
            value={query}
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
          />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
      {/* <Demo /> */}
    </>
  )
}

export default App
