// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// For example, with input `[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]` your function should return `"(123) 456-7890"`

// insert into array
// construct string
// slice the items out of array, concat to string
const assert = require('assert')

const getPhoneNumber = (array) => {
    if (Array.isArray(array)) {
        const areaCode = array.slice(0, 3).join("")
        const firstPart = array.slice(3, 6).join("")
        const secondPart = array.slice(6).join("")
        return `(${areaCode}) ${firstPart}-${secondPart}`
    }
    return ''
}

assert.deepStrictEqual(getPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123) 456-7890')
assert.deepStrictEqual(getPhoneNumber({}), '')

console.log("All Tests Passed!")