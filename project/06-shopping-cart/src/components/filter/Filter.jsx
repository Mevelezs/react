import React, { useContext, useId } from 'react'
import { FilterContext } from '../../context/filters'
import './Filter.css'

export function Filter () {
  const minPriceId = useId()
  const myCategoryId = useId()

  const { filters, setFilterProducts } = useContext(FilterContext)

  const handlePrice = (e) => {
    e.preventDefault()
    const newPrice = e.target.value
    setFilterProducts((prevState) => {
      return {
        ...prevState,
        minPrice: newPrice
      }
    })
  }

  const handleCategory = (e) => {
    e.preventDefault()
    const newCategory = e.target.value
    setFilterProducts((pevState) => (
      {
        ...pevState,
        category: newCategory
      }
    ))
  }
  return (
    <div>
      <section className='filters'>
        <div>
          <label htmlFor={minPriceId}>Min Price </label>
          <input
            type='range'
            id={minPriceId}
            min='0'
            max='1000'
            value={filters.minPrice}
            onChange={handlePrice}
          />
          <span>$ {filters.minPrice} </span>
        </div>
        <div>
          <label htmlFor={filters.category}>Caregory</label>
          <select onChange={handleCategory} id={myCategoryId}>
            <option value=''> </option>
            <option value='all'>All</option>
            <option value='laptops'>Laptops</option>
            <option value='home-decoration'>Home Decoration</option>
            <option value='smartphones'>Smartphones</option>
            <option value='fragrances'>Fragrances</option>
            <option value='skincare'>Skin Care</option>
            <option value='groceries'>Groseries</option>
          </select>
        </div>
      </section>
    </div>
  )
}
