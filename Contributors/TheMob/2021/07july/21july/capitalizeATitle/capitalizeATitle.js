const assert = require('assert')

function capitalizeLetter(char) {
  return String.fromCharCode(char.charCodeAt() - 32)
}

function capitilizeATitle(str) {
  const lowercaseWords = ['the', 'and', 'of', 'for']
  const wordsArr = str.split(' ')
  const capitalizedWordsArr = wordsArr.map((word) => {
    if (!lowercaseWords.includes(word)) {
      return capitalizeLetter(word[0]) + word.slice(1)
    }
    return word
  })
  return capitalizedWordsArr.join(' ')
}

assert.strictEqual(capitilizeATitle('war and peace'), 'War and Peace')
assert.strictEqual(capitilizeATitle('the old man and the sea'), 'the Old Man and the Sea')
console.log('All tests passed!')
