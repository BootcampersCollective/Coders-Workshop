// Get the length of an array (potentially using recursion) without accessing its length property.
//use a while loop?
// have counter, increment counter

const assert = require("assert")

function getLength(arr) {
  // have counter, increment counter
  let counter = 0
  for (let element of arr) {
    counter += 1
  }
  return counter
}

// pop element until there are none left
function getLengthR(arr, counter = 0) {
  if (arr.pop()) {
    counter += 1
    return getLengthR(arr, counter)
  }
  return counter
}

assert.strictEqual(getLength([1, 2, 3]), 3)
assert.strictEqual(getLength([]), 0)

assert.strictEqual(getLengthR([1, 2, 3]), 3)
assert.strictEqual(getLengthR([]), 0)

console.log("All tests passed!")
