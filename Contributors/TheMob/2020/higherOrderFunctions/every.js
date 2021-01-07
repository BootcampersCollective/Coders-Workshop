// The every() method tests whether all elements in the array pass the test
// implemented by the provided function.
// It returns a Boolean value.

const assert = require("assert")
function every(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === false) {
      return false
    }
  }
  return true
}

assert.strictEqual(
  every([1, 2, 3, 4], (item) => item > 0),
  true
)
assert.strictEqual(
  every([-1, -2, -3, -4], (item) => item > 0),
  false
)

console.log("All tests passed!")
