// Given an array of elements, return the length of the longest subarray where all its elements are distinct.
// For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], return 5, as longest subarray of distinct elements is [5, 2, 3, 4, 1].

// loop over and keep track of set of things seen so far
// duplicate pointer, one at beginning and one at end

const assert = require('assert')
const longestUniqueSubarray = arr => {
    if (arr.length === 0) {
        return 0
    }
    const uniqueCharacters = {}

    let i = 0
    let j = -1
    let mx = 1

    while (i < arr.length) {
        // check if element is already in set
        if (uniqueCharacters[arr[i]]) {
            while (arr[j] !== arr[i]) {
                j++
                delete uniqueCharacters[arr[j]]
            }
        }
        uniqueCharacters[arr[i]] = true
        mx = Math.max(mx, i - j)
        i++
    }
    return mx
}

// almost
const unique = (arr) => {
  return [...new Set(arr)]
};

assert.deepStrictEqual(longestUniqueSubarray([6, 5, 1, 3, 5, 2, 3, 4, 1]), 5)
assert.deepStrictEqual(longestUniqueSubarray([]), 0)
console.log('All tests passed!')