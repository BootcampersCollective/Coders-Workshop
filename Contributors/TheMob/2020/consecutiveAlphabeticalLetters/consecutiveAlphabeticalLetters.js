// Write a function that returns whether or not a given string has consecutive alphabetical letters.

// For example, input `abc` should return `true`, since it contains a, b, c consecutively in that order. 
// Input `abd` should return false, since c is missing.

// Create a list of letters
// map array to lowercase
// iterate through array, check to see if character code at next item is one greater than current item
// get charCodes of the letters
const assert = require('assert')
const consecutiveAlphabeticalLetters = (string) => {
    const alphabetArray = ["a","b","c","d","e","f","g","h","i","j","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    // to lowerCase
    // create a boolean (our return value), initialize true
    let returnVal = true
	string = string.toLowerCase()
	//convert to array for parsing
    string = [...string] // ["a", "b", "c"]

    let alphabetIndex = alphabetArray.findIndex(char => char === string[0]) + 1
    let i = 1

    while (returnVal === true && i <= string.length - 1) {
        if (alphabetIndex > alphabetArray.length - 1) {
            return false
        }
        if (string[i] !== alphabetArray[alphabetIndex] || string[i] === string[i + 1]) {
            returnVal = false
        }
        i++
        alphabetIndex++
    }
    return returnVal
}

assert.deepStrictEqual(consecutiveAlphabeticalLetters('abc'), true)
assert.deepStrictEqual(consecutiveAlphabeticalLetters('AbC'), true)
assert.deepStrictEqual(consecutiveAlphabeticalLetters('abd'), false)
assert.deepStrictEqual(consecutiveAlphabeticalLetters('ad'), false)
assert.deepStrictEqual(consecutiveAlphabeticalLetters('xyzz'), false)
assert.deepStrictEqual(consecutiveAlphabeticalLetters('xyzv'), false)
assert.deepStrictEqual(consecutiveAlphabeticalLetters('a'), true)
assert.deepStrictEqual(consecutiveAlphabeticalLetters('aa'), false)
console.log("All tests passed!")
// version 2 assert.deepStrictEqual(consecutiveAlphabeticalLetters('zab'), true)