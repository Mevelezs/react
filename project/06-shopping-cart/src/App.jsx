import { Header } from './components/header/Header'
import { Products } from './components/products/Products'
import { useFilter } from './components/hooks/filterProducts'
import { Cart } from './components/cart/Cart'
import { CartPovider } from './context/cart'

function App () {
  const { filteredProducts } = useFilter()

  return (
    <div className='mainContainer'>
      <CartPovider>
        <Header />
        <Cart />
        <Products products={filteredProducts} />
      </CartPovider>
    </div>
  )
}

export default App
