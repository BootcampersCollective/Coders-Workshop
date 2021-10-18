const assert = require('assert')

function factorial(num) {
  if (num === 0) return 1

  let totalProduct = 1
  for (let i = 1; i <= Math.abs(num); i++) {
    totalProduct *= i
  }
  return (totalProduct * num) / Math.abs(num)
}

function factorialRecursive(num) {
  if (num === 0) return 1
  return num * factorialRecursive(Math.abs(num) - 1)
}

assert.strictEqual(factorial(5), 120)
assert.strictEqual(factorial(6), 720)
assert.strictEqual(factorial(0), 1)
assert.strictEqual(factorial(-5), -120)
assert.strictEqual(factorialRecursive(5), 120)
assert.strictEqual(factorialRecursive(6), 720)
assert.strictEqual(factorialRecursive(0), 1)
assert.strictEqual(factorialRecursive(-5), -120)
console.log('All tests passed!')
