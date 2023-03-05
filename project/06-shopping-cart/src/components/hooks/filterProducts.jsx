import { useContext } from 'react'
import { FilterContext } from '../../context/filters'
import { products } from '../../mooks/products.json'

export function useFilter () {
  const { filters, setFilterProducts } = useContext(FilterContext)

  const filterProducts = (products) => {
    const productFiltered = products.filter((product) => {
      return product.price >= filters.minPrice && (
        filters.category === 'all' ||
        product.category === filters.category
      )
    })
    return productFiltered
  }

  const filteredProducts = filterProducts(products)

  return {
    setFilterProducts,
    filteredProducts

  }
}
