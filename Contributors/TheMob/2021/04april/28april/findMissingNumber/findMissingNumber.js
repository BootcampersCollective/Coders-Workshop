// [1, 3] => total should be 6 ([1, 2, 3]), but is 4 ([1, 3])
// therefore the missing number is 2

const assert = require('assert')

function secondMissingNumber(arr) {
  const sum = arr.reduce((acc, number) => acc + number) // 4
  const lastNumber = arr.length + 1
  const GaussianSum = (lastNumber / 2) * (1 + lastNumber)

  return GaussianSum - sum
}

function missingNumber(arr) {
  // sort array
  arr.sort((a, b) => a - b)
  // as soon as we arrive at a value where the arr[index] !== index + 1

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      throw TypeError('Wrong input')
    }

    if (arr[i] !== i + 1) {
      // found missing number
      return i + 1
    }
  }
}

assert.strictEqual(missingNumber([8, 4, 6, 5, 2, 3, 1, 9, 10, 11, 12]), 7)
assert.strictEqual(missingNumber([1, 2, 3, 5, 6, 7, 8, 9, 10]), 4)
assert.strictEqual(secondMissingNumber([8, 4, 6, 5, 2, 3, 1, 9, 10, 11, 12]), 7)
assert.strictEqual(secondMissingNumber([1, 2, 3, 5, 6, 7, 8, 9, 10]), 4)

console.log('All tests passed!')
