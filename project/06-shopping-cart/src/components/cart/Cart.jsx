import React, { useId } from 'react'
import { useCart } from '../hooks/UseCart'
import { CartIcon, ClearCartIcon } from '../icons/Icons'
import './Cart.css'

function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong>  -  $ {price}
      </div>
      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}
export function Cart () {
  const checkBoxId = useId()
  const { cart, addToCart, clearCart } = useCart()
  return (
    <>
      <label className='cart-button' htmlFor={checkBoxId}>
        <CartIcon />
      </label>
      <input id={checkBoxId} type='checkbox' className='input-checkbox' />

      <aside className='cart'>
        <ul>
          {
            cart.map(item =>
              <CartItem
                key={item.id}
                addToCart={() => { addToCart(item) }}
                {...item}
              />
            )
          }
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
