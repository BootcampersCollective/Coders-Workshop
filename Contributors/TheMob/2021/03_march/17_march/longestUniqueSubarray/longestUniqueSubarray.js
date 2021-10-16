// /Given an array of elements, return the length
// of the longest subarray where all its elements are distinct.

// For example, given the array [5, 1, 3, 5, 2, 3, 4, 1, 5],
// return 5 as the longest subarray of distinct elements is [5, 2, 3, 4, 1].

// build map to see frequency of numbers; fill map with number: frequency
// count to know the frequency of each number

// build map to see frequency of numbers; fill map with number: frequency
// loop over array

// [5, 1, 3, 5, 2, 3, 4, 1, 5],
const assert = require('assert')

const allItemsUnique = (arr) => {
    if (arr.length === 0) {
        return true
    }
    const lastItem = arr.pop()
    if (arr.includes(lastItem)) {
        return false
    }
    return allItemsUnique(arr)
}

const longestUniqueSubarray = (arr) => {
    // sliding window
    let leftWindow = 0
    let rightWindow = 1
    let longestUniqueSubarraySoFar = 0
    while (rightWindow < arr.length) {
        // get the subarray
        const subarr = arr.slice(leftWindow, rightWindow) // return subarray
        // check if it's unique
        if (allItemsUnique(subarr.slice())) {
            longestUniqueSubarraySoFar = Math.max(subarr.length, longestUniqueSubarraySoFar);
            rightWindow += 1
        } else {
            leftWindow += 1
            rightWindow = leftWindow + 1
        }
    }
    return longestUniqueSubarraySoFar
}

assert.strictEqual(longestUniqueSubarray([5, 1, 3, 1, 5, 2, 3, 4, 1, 5]), 5)
assert.strictEqual(longestUniqueSubarray([1, 2, 2]), 2)
assert.strictEqual(longestUniqueSubarray([1, 2, 3, 2]), 3)
assert.strictEqual(longestUniqueSubarray([1, 2, 1, 3, 4, 5, 6]), 5)
assert.strictEqual(longestUniqueSubarray([-1, -1, -5, 0, 3, 5, 6, 8, 8, 0]), 7)


console.log('All tests passed!')
