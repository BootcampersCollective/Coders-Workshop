const assert = require('assert')

const consecutiveAlphabeticalLetters = (str) => {
  const lowerStr = str.toLowerCase()
  // uncomment if it should always start with `a`
  // if (lowerStr[0] !== 'a') return false
  for (let i = 0; i < lowerStr.length - 1; i++) {
    const firstCode = lowerStr[i].charCodeAt()
    const secondCode = lowerStr[i + 1].charCodeAt()
    if (firstCode + 1 !== secondCode) {
      return false
    }
  }
  return true
}

assert.strictEqual(consecutiveAlphabeticalLetters('abc'), true)
assert.strictEqual(consecutiveAlphabeticalLetters('abd'), false)
assert.strictEqual(consecutiveAlphabeticalLetters('cde'), true) // or false if should start with `a`
console.log('All tests passed!')
