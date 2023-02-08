import React, { useEffect, useState } from 'react'
const useCat = () => {
  const CAT_PRFIX_IMAGE_URL = 'https://cataas.com'

  const [fact, setFact] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(resp => resp.json())
      .then(data => {
        setFact(data.fact)
      }
      )
  }, [])

  useEffect(() => {
    if (!fact) return

    const firstWorld = fact.split(' ').slice(0, 1).join(' ')

    fetch(`https://cataas.com/cat/says/${firstWorld}?size=50&color=red&json=true`)
      .then(resp => resp.json())
      .then(data => setImage(data.url))
  }, [fact])

  return {
    image,
    fact,
    CAT_PRFIX_IMAGE_URL
  }
}

export default function App () {
  const { image, fact, CAT_PRFIX_IMAGE_URL } = useCat()

  return (
    <>
      {fact && <div>{fact}</div>}
      {
        image && <img src={`${CAT_PRFIX_IMAGE_URL}${image}`} alt={`Image extracted using the first word for : ${fact}`} />
      }
    </>
  )
}
