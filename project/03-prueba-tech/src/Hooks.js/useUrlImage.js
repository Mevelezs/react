import { useEffect, useState } from 'react'

export const useCatImage = ({ fact }) => {
  const CAT_PRFIX_IMAGE_URL = 'https://cataas.com'
  const [image, setImage] = useState('')

  useEffect(() => {
    if (!fact) return

    const firstWorld = fact.split(' ').slice(0, 3).join(' ')
    // fact.split(' ', 3).join('  ')

    fetch(`https://cataas.com/cat/says/${firstWorld}?size=50&color=red&json=true`)
      .then(resp => resp.json())
      .then(data => setImage(data.url))
  }, [fact])

  const imageUrl = `${CAT_PRFIX_IMAGE_URL}${image}`
  return {
    imageUrl
  }
}
