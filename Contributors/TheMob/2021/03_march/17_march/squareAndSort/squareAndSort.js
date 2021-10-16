// Given a sorted list of integers, 
// square the elements and give the output in sorted order.

// For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].

const assert = require('assert')

const squareAndSort = (arr) => arr.map((item) => item ** 2).sort((a, b) => a - b)

assert.deepStrictEqual(squareAndSort([-9, -2, 0, 2, 3]), [0, 4, 4, 9, 81])
assert.deepStrictEqual(squareAndSort([1, 2, 3, 4]), [1, 4, 9, 16])

console.log('🕵️‍♀️🕵️‍♂️👍')
// sluice spies approve
