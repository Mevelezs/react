const array = Array(9).fill(null)

array.map((e, index, arr)=> {
    console.log(e, index, arr)
})

console.log(array)

// cpmparacio de arrays

console.log(array.every(e => e === null))
