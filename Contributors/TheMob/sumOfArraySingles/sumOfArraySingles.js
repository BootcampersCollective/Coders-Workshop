// Given an array of digits, return the sum of all array elements that occur only once.
// For example, given `[4, 5, 7, 4, 8, 5]` return 15, since only 7 and 8 appear once and their sum is 15.

// find unique values
// sum those values

// create new array, push value if value doesn't already exist
    // Logic: Array.indexOf, Array.lastIndexOf; compare indexOf and lastIndexOf: if equal, one value, otherwise, more than one

const assert = require('assert');

function sumOfArraySingles (arr) {
    const numberCount = {}
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        // [4, 4, 4, 5, 7, 4, 8, 5]
        if (numberCount[arr[i]] === undefined) {
            numberCount[arr[i]] = 1
        } else {
            numberCount[arr[i]]++
        }
    }
    const keys = Object.keys(numberCount)
    for (const key of keys) {
        if (numberCount[key] === 1) {
            sum += Number(key)
        }
    }
    return sum
}

assert.deepStrictEqual(sumOfArraySingles([4, 5, 7, 4, 8, 5]), 15)
console.log('All tests passed!')