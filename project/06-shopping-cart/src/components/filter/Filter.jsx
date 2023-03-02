import React from 'react'
import './Filter.css'
export function Filter () {
  return (
    <div>
      <h1>Shopping Cart 🛒</h1>
      <section className='filters'>
        <div>
          <label htmlFor='price'>Price</label>
          <input type='range' id='price' min='0' max='100' />
        </div>
        <div>
          <label htmlFor='category'>Caregory</label>
          <select id='category'>
            <option value='all'>All</option>
            <option value='laptops'>Laptops</option>
            <option value='smartphones'>Smartphones</option>
          </select>
        </div>
      </section>
    </div>
  )
}
