// Recuperando Inputs sin Hooks (useState)

import React, { useRef } from 'react'
export default function Demo () {
  // se le da un nombre al input, y se usa la propiedades del DOM
  // Para un dato
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const fields = new window.FormData(e.target)
  //   const data = fields.get('query')
  //   console.log(data)
  // }

  // para varios inputs
  // convertimos transformamos todos los campos con el ObjectFromEntries ynle pasamos el formulario
  // equivalente al useState con estados compuestos pero de forma nativa
  const handleSubmit = (e) => {
    e.preventDefault()
    const fields = Object.fromEntries(new window.FormData(e.target))
    console.log(fields)
  }

  // // usando useRef para capturar el input --- ESTO NO DEJA EJECUTAR EL handleSubmit
  // const inputref = useRef()

  // const handleSubmitUseRef = (e) => {
  //   e.preventDefault()
  //   const value = inputref.current.value
  //   console.log(value)
  // }
  return (
    <form onSubmit={handleSubmit}>
      <input name='query' type='text' />
      <input name='quer' type='text' />
      <input name='que' type='text' />
      <input /*ref={inputref }*/ type='text' />
      <button /* onClick={handleSubmitUseRef} */ type='submit'>Search</button>
    </form>
  )
}
