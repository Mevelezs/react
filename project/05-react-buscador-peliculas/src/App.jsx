import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovie'
import { useSearch } from './hooks/useSearch'

function App () {
  const [sort, setSort] = useState(false)
  const { movies, getMovies, loading } = useMovies({ sort })
  const { search, error, handleonChange, handleSubmit } = useSearch({ getMovies })
  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1> Movie Search  Engine</h1>
        <form className='form' onSubmit={handleSubmit}>
          <div>
            <input
              type='text'
              placeholder='Matrix, Avengers, Star Wars...'
              onChange={handleonChange}
              name='query'
              value={search}
              style={{
                border: '1px solid transparent',
                borderColor: error ? 'red' : 'transparent'
              }}
            />
            {
              search && search.length > 2
                ? (
                  <input type='checkbox' className='sort' checked={sort} onChange={handleSort} />)
                : (<input type='checkbox' className='sort' disabled checked={sort} onChange={handleSort} />)
            }
            <button type='submit'>Search</button>
          </div>
          <div>
            {
              error && error.length > 3 ? <p style={{ color: 'red' }}>{error}</p> : null
            }
          </div>
        </form>
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
