// A fixed point in an array is an element whose value is equal to its index. 

// Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return `false`.

// For example, given `[-6, 0, 2, 40]`, you should return `2`. Given `[1, 5, 7, 8]`, you should return `false`.


// iterate through the array, check if each element equals index -- if so, return it


// [5....]
const assert = require('assert')
const fixedPt = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i) {
            return i
        }
    }
    return false
}

assert.deepStrictEqual(fixedPt([-6, 0, 2, 40]), 2)
assert.deepStrictEqual(fixedPt([1, 5, 7, 8]), false)

console.log('All tests passed!')

module.exports = {fixedPt};