// Given an integer `n`, return the length of the longest consecutive run of 1s in its binary representation.

// For example, given 156, you should return 3.

// convert to binary representation (string)
// count number of consecutive ones
    // by converting to array
    // .filter() -- get length


// given a string, return the length of the longest consecutive run of 1s in the string
// e.g. "12355361111" return 4

// when we find a 1, increment, continue looking for consecutive ones (nested loop)
// two counters: max and currentCounter

const assert = require('assert')
const longestConsecutiveOnes = str => {
    let max = 0
    let currentCounter = 0
    for (let i = 0; i < str.length; i++) {
        while(str[i] === "1") {
            currentCounter++
            i++
        }
        if (currentCounter > max) {
            max = currentCounter
        }
        currentCounter = 0
    }
    return max
}

assert.deepStrictEqual(longestConsecutiveOnes("12355361111"), 4)
assert.deepStrictEqual(longestConsecutiveOnes(""), 0)
assert.deepStrictEqual(longestConsecutiveOnes("-1"), 1)
assert.deepStrictEqual(longestConsecutiveOnes(2348971), 1)
console.log("All tests passed!")