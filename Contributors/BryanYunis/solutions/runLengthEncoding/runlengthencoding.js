
const assert = require('assert')

const getRepeatedCharsLength = (str, count=1) => str[0] === str[1]
    ? getRepeatedCharsLength(str.slice(1), count+1)
    : count

  const runLengthEncoding = (string) => string.length
  ? getRepeatedCharsLength(string) + string[0] + runLengthEncoding(string.slice(getRepeatedCharsLength(string)))
  : ''

assert.strictEqual(runLengthEncoding('AAAABBBCCDAA'),'4A3B2C1D2A')
assert.strictEqual(runLengthEncoding('A'), '1A')
console.log('👍')
