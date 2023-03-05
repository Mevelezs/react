import React from 'react'
import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from '../icons/Icons'
import { useCart } from '../hooks/UseCart'

export function Products ({ products }) {
  const { cart, addToCart, removeProductFromCart } = useCart()
  const checkProductCart = (product) => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {
          products.map(product => {
            const isProductInCart = checkProductCart(product)

            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <div>
                  <button
                    style={{ backgroundColor: isProductInCart ? 'red' : 'blue' }}
                    onClick={() =>
                      isProductInCart
                        ? removeProductFromCart(product)
                        : addToCart(product)}
                  >
                    {
                      isProductInCart
                        ? <RemoveFromCartIcon />
                        : <AddToCartIcon />
                    }
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
