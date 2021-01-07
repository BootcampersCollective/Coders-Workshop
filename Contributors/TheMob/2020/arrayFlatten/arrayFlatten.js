// take an array with possible nested arrays, return a 'flattened' version of that array

// for example, with input [1, 2, 3, [1, 2, 3]], return [1, 2, 3, 1, 2, 3]
// for example, with input [1, 2, 3, [1, 2, [1, 2]]], return [1, 2, 3, 1, 2, 1, 2]

// create array, walk through each element in input array, copy into new array.
// if the element is an array, repeat the process

const assert = require('assert')

const flattenArray = arr => {

    const outputArr = []

    const flatten = arr => {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'object') {
                // it's a number
                outputArr.push(arr[i])
            } else {
                flatten(arr[i])
            }
        }
        return outputArr
    }
    return flatten(arr)
}

assert.deepStrictEqual(flattenArray([1, 2, 3, [1, 2, [1, 2]]]), [1, 2, 3, 1, 2, 1, 2])
console.log("All tests passed!")