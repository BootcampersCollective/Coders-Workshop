// * The first algorithm in 2021!!!!

// Given a letter, return its position in the alphabet.
// For example, given `'a'`, return `1`. Given `'Y'` return `25`.

// use ASCII key codes
// have a string with all letters in alphabet in order -> find place in that string

const assert = require('assert')

function getLetterPosition(letter) {
  if (typeof letter !== 'string' || letter.length > 1) return null
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  if (alphabet.indexOf(letter.toLowerCase()) === -1) {
      return null
  }
  return alphabet.indexOf(letter.toLowerCase()) + 1
}

assert.sstrictEqual(getLetterPosition("a"),1) // 1
assert.sstrictEqual(getLetterPosition("A"),1) // 1
assert.sstrictEqual(getLetterPosition("d"),4) // 4
assert.sstrictEqual(getLetterPosition(""), null) // null
assert.sstrictEqual(getLetterPosition({}), null) // null
assert.sstrictEqual(getLetterPosition("ab"), null) // null
assert.sstrictEqual(getLetterPosition("9"), null) // null

module.exports = {getLetterPosition}
