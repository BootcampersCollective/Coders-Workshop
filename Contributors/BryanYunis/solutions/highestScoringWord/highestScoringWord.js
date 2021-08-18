const assert = require("assert")

const wordScoreReducer = (a, c) => a + c.charCodeAt(0) - 96

const wordScore = (word) => word.split("").reduce(wordScoreReducer, 0)

const wordsSortedByScore = (string) => string.split(" ")
  .sort((a, b) => {
    if (wordScore(a) - wordScore(b) < 0) return -1
    if (wordScore(a) - wordScore(b) > 0) return 1
    return -1
  })

const highestScoringWord = (string) => wordsSortedByScore(string).pop()

assert.strictEqual(highestScoringWord("hello world"), "world")
assert.strictEqual(highestScoringWord("a man a plan a canal panama"), "panama")
assert.strictEqual(highestScoringWord("aa b"), "aa")

console.log("All tests passed!")
