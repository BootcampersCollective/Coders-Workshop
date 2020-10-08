// Take an array with possible nested arrays, return a 'flattened' version of that array

// For example, with input `[1, 2, 3, [1, 2, 3]]`, return `[1, 2, 3, 1, 2, 3]`.
// With input `[1, 2, 3, [1, 2, [1, 2]]]`, return `[1, 2, 3, 1, 2, 1, 2]`.

// iterate through outer array, identify each item is array -- typeof or Array.isArray()
// use spread operator to get items if an array is found
// continue until no arrays left
// recursion?

const assert = require('assert')


const flattenArray = (array) => {
    if (!Array.isArray(array)) return array
    
    const flattenRecurse = (arr) => {
      let resultArray = []
      for (const item of arr) {
          if (!Array.isArray(item)) {
              // push it to resultArray
              resultArray.push(item)
          } else {
              // item is an array (could be multiple levels)
              resultArray = resultArray.concat(flattenRecurse(item))
          }
      }
      return resultArray
  }
  return flattenRecurse(array)
}

assert.deepStrictEqual(flattenArray([1, 2, 3, [1, 2, 3]]),[1, 2, 3, 1, 2, 3])
assert.deepStrictEqual(flattenArray([1, 2, 3, [1, 2, [1, 2]]]),[1, 2, 3, 1, 2, 1, 2])
assert.deepStrictEqual(flattenArray([1, [2, [3, [4, 5, [6, [7, [8]]]]]]]), [1, 2, 3, 4, 5, 6, 7, 8])
assert.deepStrictEqual(flattenArray(null), null)
console.log('All tests passed!')
