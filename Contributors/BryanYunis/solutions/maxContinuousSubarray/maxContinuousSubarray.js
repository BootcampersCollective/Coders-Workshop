const assert = require('assert')

const maxContinuousSubarray = (arr) => arr.reduce((sum, item) => 
    item < 0 && Math.abs(item) > sum
    ? 0
    : item + sum
)

assert.strictEqual(maxContinuousSubarray([34, -50, 42, 14, -5, 86]), 137)
assert.strictEqual(maxContinuousSubarray([-5, -1, -8, -9]), 0)
console.log('All tests passed')