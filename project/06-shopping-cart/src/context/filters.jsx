import { createContext, useState } from 'react'

// crear el contexto
const FilterContext = createContext()

// crea el provider
function FilterProvider ({ children }) {
  const [filters, setFilterProducts] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FilterContext.Provider value={{
      filters,
      setFilterProducts
    }}
    >
      {children}

    </FilterContext.Provider>
  )
}

export {
  FilterContext,
  FilterProvider
}
