const assert = require('assert')

squareAndSort = arr => {
    return arr
        .map(num => Math.pow(num, 2))
        .sort((a, b) => a - b)
}



assert.deepStrictEqual(squareAndSort([-9, -2, 0, 2, 3]),  [0, 4, 4, 9, 81])

console.log('All Tests Passed!')