import { products } from '../src/mooks/products.json'
import { Products } from './components/products/Products'

function App () {
  return (
    <div className='mainContainer'>
      <h1>Shopping Cart 🛒</h1>
      <Products products={products} />
    </div>
  )
}

export default App
