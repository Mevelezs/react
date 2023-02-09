import { useEffect, useState } from 'react'
import { getFact } from '../services/getFact'

export const useCatFact = () => {
  const [fact, setFact] = useState('')

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(resp => resp.json())
      .then(data => {
        setFact(data.fact)
      }
      )
  }, [])

  const handleClickFact = async () => {
    const resp = await getFact()
    return setFact(resp)
    // return getFact().then(newFact => setFact(newFact)) otra forma
    // incluso return getFact().then(setFact(newFact))
  }

  return {
    setFact,
    fact,
    handleClickFact
  }
}
