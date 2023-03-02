/* eslint-disable no-unused-expressions */
import { useState } from 'react'
import { products } from '../src/mooks/products.json'
import { Header } from './components/header/Header'
import { Products } from './components/products/Products'

function App () {
  const [filters, setFilterProducts] = useState({
    category: 'all',
    myprice: 0
  })

  const filterProducts = (products) => {
    const productFiltered = products.filter((product) => {
      return product.price >= filters.myprice && (
        filters.category === 'all' ||
        product.category === filters.category
      )
    })
    return productFiltered
  }
  return (
    <div className='mainContainer'>
      <Header />
      <Products products={filterProducts(products)} />
    </div>
  )
}

export default App
