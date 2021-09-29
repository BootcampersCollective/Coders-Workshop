
// Given two strings A and B, return whether or not A can be shifted some number of times to get B.

// For example, if A is `abcde` and B is `cdeab`, return `true`. If A is `abc` and B is `acb`, return `false`.

const assert = require('assert')
const shiftingStrings = (a, b) => {
    let canBeShifted = false
    for (let i = 0; i < b.length; i++) {
        if (a === b) {
            canBeShifted = true
            break
        }
        else {
            shift(a)
        }

    }
    return canBeShifted

}

const shift = (str) => {
    str.split('').splice(0, 1, )
}

assert.strictEqual(shiftingStrings('abcde', 'cdeab'))
console.log('All tests passed!')

// For example, if A is `abcde` and B is `cdeab`, return `true`. If A is `abc` and B is `acb`, return `false`.