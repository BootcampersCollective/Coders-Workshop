// Create a function that takes in a snake_cased string and returns a prettified string.

// For example, if you were given input `first_name` your function would return `First Name`. Or with input `LAST_NAME` your function would return `Last Name`.

// remove special characters

// split on underscores
// convert everything to lower case
// toUpper() on first index of each word


const assert = require('assert')
const prettyNames = str => {
    const split = str.split('_')
    const listOfWords = []

    return split.map(word => {
        return word.toLowerCase()[0].toUpperCase() + word.toLowerCase().slice(1)
    }).join(' ')
}

assert.deepStrictEqual(prettyNames('first_name'), 'First Name')
assert.deepStrictEqual(prettyNames('LAST_NAME'), 'Last Name')
console.log("All tests passed!")