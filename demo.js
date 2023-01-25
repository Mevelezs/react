const array = Array(9).fill(null)

// eslint-disable-next-line array-callback-return
array.map((e, index, arr) => {
  console.log(e, index, arr)
})

console.log(array)

// comparacion de arrays

console.log(array.every(e => e === null))
