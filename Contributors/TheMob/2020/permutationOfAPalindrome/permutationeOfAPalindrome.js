// Given a string, write a function to check if it is a permutation of a palindrome.  

// A palindrome is a word or phrase that is the same forwards and backwards. 

// A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.  

// For example, input 'racecar' or 'tactcoa' should return `true`, while 'kitten' should return `false`.

// first write a function that determines whether the word is a palindrome

// (write a RegEx to see) check to see if each letter appears twice (with maybe an exception)

// check if palindrome

const assert = require('assert')

const isPalindrome = string => {
    let stringReversed = ''
    for (let i = string.length - 1; i >= 0; i--) {
        stringReversed += string[i]
    }
    return stringReversed === string
}


const isPermutationOfPalindrome = string => {
    if (string.length === 0) {
        return false
    }
    // check for even or odd # of characters
    const isEven = string.length % 2 === 0
    // sort? or dictionary
    const frequencies = {}

    for (let i = 0; i < string.length; i++) {
        if (frequencies[string[i]] !== undefined) {
            frequencies[string[i]]++
        } else {
            frequencies[string[i]] = 1
        }
    }
    
    const keyArray = Object.keys(frequencies)
    // iterate through properties, if string.length is odd, we're allowed one odd, otherwise we're not allowed an odd

    let oddCount = 0
    for (let i = 0; i < keyArray.length; i++) {
        if (frequencies[keyArray[i]] % 2 !== 0) {
            oddCount++
            if (isEven === true && oddCount > 0) {
                return false
            }
            if (oddCount > 1) {
                return false
            }
        }
    }
    return true
}


assert.deepStrictEqual(isPermutationOfPalindrome('racecar'), true)
assert.deepStrictEqual(isPermutationOfPalindrome('tactcoa'), true)
assert.deepStrictEqual(isPermutationOfPalindrome('kitten'), false)
assert.deepStrictEqual(isPermutationOfPalindrome(''), false)

console.log('All Tests Passed!')

