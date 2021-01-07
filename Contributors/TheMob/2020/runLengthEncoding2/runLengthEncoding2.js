// For example, the string `"AAAABBBCCDAA"` would be encoded as `"4A3B2C1D2A"`.

// for loop
// 'AAAABBBCCDAA'

const assert = require("assert")

function lengthEncode(str) {
  let letter = ""
  let counter = 0
  let result = ""
  str.split("").forEach((character) => {
    if (letter === character) {
      counter += 1
    } else if (letter !== character && !counter) {
      // first letter
      letter = character
      counter = 1
    } else {
      result += counter + letter
      letter = character
      counter = 1
    }
  })
  result += counter + letter
  return result
}

assert.strictEqual(lengthEncode("AAAABBBCCDAA"), "4A3B2C1D2A")
assert.strictEqual(lengthEncode("AABBBBBDDDAA"), "2A5B3D2A")
console.log("All tests passed!")

function encodeString(str) {
  let currentLetter
  let count = 0
  let newString = ""

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      currentLetter = str[i]
      count += 1
    } else {
      if (str[i] === str[i - 1]) {
        count += 1
      } else {
        newString += count
        newString += currentLetter
        currentLetter = str[i]
        count = 1

        if (i === str.length - 1) {
          newString += count + currentLetter
        }
      }
    }
  }

  return newString
}
