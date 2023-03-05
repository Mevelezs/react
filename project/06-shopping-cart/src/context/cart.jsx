import { createContext, useReducer } from 'react'

const CartContext = createContext()

const initilaState = JSON.parse(window.localStorage.getItem('cart')) || []

const ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {

  [ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload
    const productsInCartIndex = state.findIndex(item => item.id === id)

    if (productsInCartIndex >= 0) {
      const newCart = structuredClone(state)
      newCart[productsInCartIndex].quantity += 1
      updateLocalStorage(newCart)
      return newCart
    }

    const newState = [
      ...state,
      {
        ...action.payload,
        quantity: 1
      }
    ]
    updateLocalStorage(newState)
    return newState
  },
  [ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter(item => item.id !== id)
    updateLocalStorage(newState)
    return newState
  },

  [ACTION_TYPES.CLEAR_CART]: () => {
    const newState = []
    updateLocalStorage(newState)
    return newState
  }
}

const reducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}

function CartPovider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initilaState)

  const addToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    })
  }

  const removeProductFromCart = (product) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product
    })
  }

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
      payload: []
    })
  }
  return (
    <CartContext.Provider value={{
      addToCart,
      cart: state,
      clearCart,
      removeProductFromCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

export {
  CartPovider,
  CartContext
}
