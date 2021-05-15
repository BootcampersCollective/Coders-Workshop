const assert = require('assert')

const contiguousVowelsCount = (str, count = 0) =>
  isVowel(str[0]) ? contiguousVowelsCount(str.slice(1), count + 1) : count

const isVowel = (char) =>
  ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char) ? 1 : 0

const countVowels = (string, max = 0) =>
  string.length
    ? countVowels(string.slice(1), Math.max(max, contiguousVowelsCount(string)))
    : max

const longestContinuousVowels = (arr) =>
  arr.sort((a, b) => countVowels(b) - countVowels(a))

assert.deepStrictEqual(
  longestContinuousVowels([
    'Or is it the taco that makes the chili spicy',
    'Closer the neighbor, further the anger',
    'The anxious queen will surrender'
  ]),
  [
    'The anxious queen will surrender',
    'Closer the neighbor, further the anger',
    'Or is it the taco that makes the chili spicy'
  ]
)

assert.deepStrictEqual(longestContinuousVowels(['EEI', 'EEEI']), ['EEEI', 'EEI'])

console.log('👍')
