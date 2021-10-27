const assert = require("assert")

// accept a nested array, return a flattened and sorted array

// flatten array
//   use built in flatten method (?)
// sort array
//   use built in sort method (?)

function flatten(arr) {
  const returnArr = []

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      returnArr.push(...flatten(arr[i]))
    } else {
      returnArr.push(arr[i])
    }
  }
  return returnArr
}

const flattenAndSort = (arr) =>
  flatten(arr)
    .sort((a, b)=> a - b)

assert.deepStrictEqual(
  flattenAndSort([[1, 2, 3], [5, 4], [], [8, 7, 9, 6]]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
)
assert.deepStrictEqual(
  flattenAndSort([[3, 4, 5], [6, 7], [], [8, 9]]),
  [3, 4, 5, 6, 7, 8, 9]
)
console.log("All tests passed!")
