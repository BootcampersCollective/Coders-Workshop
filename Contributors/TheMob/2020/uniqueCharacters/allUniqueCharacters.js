// Write a function that takes a string and returns `true` if all characters in the string are unique. Otherwise, it returns `false`. 

// This function should complete in one pass through the string, i.e. it should run in O(n) time.

// For example, the input `'whistle'` should return `true`, while `'painting'` should return `false`.

// create map

const assert = require('assert')

const uniqueChars = string => {
    const map = new Map()

    for (const letter of string) {
        if(map.has(letter)) return false
        map.set(letter, true)
    }
    return true
}

assert.deepStrictEqual(uniqueChars('whistle'), true)
assert.deepStrictEqual(uniqueChars('painting'), false)
console.log('All tests passed!')