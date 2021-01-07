// reverse engineer Array.prototype.filter


// array.filter( (word) => word.startsWith(s) )

// array of items to filter
// loop through items to see if that function applies to each item
// push to result array

const assert = require('assert')

const filterCustom = (array, func) => {
    if (!Array.isArray(array)) {
        return []
    }
    const resultArray = []
    for (let i = 0; i < array.length; i++) {
        if(func(array[i], i, array)) {
            resultArray.push(array[i])
        }
    }
    return resultArray;
}

const testingFunction = (num, index, array) => {
    return num < 5
    }

assert.deepStrictEqual(filterCustom([1, 2, 3, 4, 5], (num, index, array) => {
    if (index < 2) return num < 5
 }
 ), [1, 2])
