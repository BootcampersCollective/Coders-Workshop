
// Given an array where each number represents the number of hops you can make, determine whether you can reach to the last index starting at index 0.

// For example, [2, 0, 1, 0] returns True while [1, 1, 5, 1] returns False.

const assert = require('assert')

const hopThroughAnArray = (array) => {
    for (let i = 0; i < array.length;) {
        if (i === array.length -1) {
            return true
        }
        if (array[i] === 0 && i !== array.length - 1) {
            return false
        }
        if (i + array[i] > array.length - 1) {
            return false
        }
        i += array[i]
    }
    return false
}

assert.deepStrictEqual(hopThroughAnArray([2, 0, 1, 0]), true)
assert.deepStrictEqual(hopThroughAnArray([1, 1, 5, 1]), false)
assert.deepStrictEqual(hopThroughAnArray([0, 0]), false)
console.log('All tests passed')
