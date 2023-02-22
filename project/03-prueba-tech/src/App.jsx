import { useCatFact } from './Hooks.js/useCatFact'
import { useCatImage } from './Hooks.js/useUrlImage'

export default function App () {
  const { fact, handleClickFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  return (
    <>
      {fact && <div>{fact}</div>}
      {
        imageUrl && <img src={imageUrl} alt={`Image extracted using the first word for : ${fact}`} />
      }
      <button onClick={handleClickFact}>Refresh</button>
    </>
  )
}
