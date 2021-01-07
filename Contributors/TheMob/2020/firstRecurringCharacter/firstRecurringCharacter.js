// Given a string, return the first recurring character in it, or null if there is no recurring character.

// For example, given the string `"acbbac"`, return `"b"`. Given the string `"abcdef"`, return `null`.


// compare current character with the next character to see if match
// if so, return it
// otherwise, return null

const assert = require('assert')

const firstRecurringCharacter = string => {

    const frequencies = {}

    for (let i = 0; i < string.length -1; i++) {
        if (frequencies[string[i]]) {
            return string[i]
        }
        frequencies[string[i]] = true
    }
    return null
}
const firstConsecutiveRecurringCharacter = string => {

    for (let i = 0; i < string.length -1; i++) {
        // look at one value
        if (string[i] === string[i + 1]) {
            return string[i]
        }
    }
    return null
}

console.log(firstRecurringCharacter('acbbac'))
// assert.deepStrictEqual(firstConsecutiveRecurringCharacter('acbbac'), "b")
console.log('All tests passed!')
