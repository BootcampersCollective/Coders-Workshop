// For example, given `[1, 3, 3, 4, 7, 1]`, your function should return `[3, 4, 7, 1]`,
// since the first `1` and `3` are left-most duplicates.
// Given `['a', 'r', 'p', 'a', 'g', 'g']`, return `['r', 'p', 'a', 'g']`

// iterate over the array backwards

// convert the array to set
// push if unique
// const mySet = new Set([]);
// to add:  mySet.add(x)
// to see if set has:  mySet.has(x)

const assert = require('assert')
function removeDuplicates(arr) {
  if (!Array.isArray(arr)) return null
  // iterate backwards
  const existing = new Set([])
  for (let i = arr.length - 1; i >= 0; i--) {
    existing.add(arr[i])
  }
  return Array.from(existing).reverse() // <--- this will be backwards, need convert to arr and reverse it
}

assert.deepStrictEqual(removeDuplicates([1, 3, 3, 4, 7, 1]), [3, 4, 7, 1])
assert.deepStrictEqual(removeDuplicates('Hello'), null)
console.log('All tests passed!')

/**
 * Scribbles
 */
