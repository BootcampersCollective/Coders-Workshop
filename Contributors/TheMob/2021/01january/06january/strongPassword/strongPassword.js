// Write a function that takes a string representing a password
// and checks to see whether it is a valid password.
// The following are the rules for a password being valid:

// [x] It is between 8-20 characters
// - Contains only the following characters, and must contain one character from each category
//   [x] uppercase letters
//   [x] lowercase letters
//   - digits
//   - the special characters `!@#$%^&*?`

// The function should return `true`

// thinking out loud:
/**
 * to check for uppercase:  char.toLowerCase() != char
 * to check for lowercase:  char.toUpperCase() != char
 * to check for digit:  Number(char) != NaN
 */

/*could also just use arrays for uppercase, lowercase, digits, special characters*/

const assert = require('assert')

function isStrongPass(str) {
  if (!(str.length <= 20 && str.length >= 8)) return false
  if (str.toLowerCase() === str) return false
  if (str.toUpperCase() === str) return false
  if (!/\d/.test(str)) return false
  if (!new RegExp('[@#$%^&*?]').test(str)) return false
  return true
}

assert.strictEqual(isStrongPass('123')) // false
assert.strictEqual(isStrongPass('12tgS@39')) // true
assert.strictEqual(isStrongPass('pass"')) // false
assert.strictEqual(isStrongPass('1T@g"')) // false
