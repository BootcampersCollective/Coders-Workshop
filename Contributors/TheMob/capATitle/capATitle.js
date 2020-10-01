// Write a function that takes a string and properly capitalizes it as if it were the title of a work of art.  
// The first word should begin with an uppercase, and each subsequent word should begin with an uppercase except the words `the`, `and`, `of`, and `for`.
// For example, an input `"war and peace"` should return `"War and Peace"` and `"the old man and the sea"` should return `"The Old Man and the Sea"`.


const assert = require('assert')

const capitalizeATitle = string => {
    if (string.length === 0) {
        return ''
    }
    if (typeof string !== 'string') {
        return null
    }
    // divide phrase into words, store in array
    const wordsArr = string.toLowerCase().split(' ')
    // object that holds that excluded words
    const excludedWords = new Set()
    excludedWords.add('the').add('and').add('of').add('for')

    const capitalizedWordsArr = wordsArr.map((word, i) => {
        // if first word OR is not an excluded word: capitalize
        if (i === 0 || !excludedWords.has(word)) {
           return capitalize(word)
        }
        return word
    })
    return capitalizedWordsArr.join(' ')
}

const capitalize = string => {
    // get first letter of word, convert to uppercase, concatentate with rest of letters of word
    return string[0].toUpperCase().concat(string.slice(1))
}

assert.deepStrictEqual(capitalizeATitle('war and peace'), 'War and Peace')
assert.deepStrictEqual(capitalizeATitle('the old man and the sea'), 'The Old Man and the Sea')
assert.deepStrictEqual(capitalizeATitle(''), '')
assert.deepStrictEqual(capitalizeATitle('hello'), 'Hello')
assert.deepStrictEqual(capitalizeATitle('h'), 'H')
assert.deepStrictEqual(capitalizeATitle('.'), '.')
assert.deepStrictEqual(capitalizeATitle({title: 'the old man and the sea'}), null)

console.log('All Tests Passed')