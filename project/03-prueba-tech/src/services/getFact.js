export function getFact () {
  return fetch('https://catfact.ninja/fact')
    .then(data => data.json())
    .then(data => {
      const { fact } = data
      return fact
    })
}
