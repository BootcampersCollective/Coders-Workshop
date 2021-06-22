const { pipe, T, F, curry, cond, always, identity, any, last, isNil, compose, dropHeadAndTail, headN, aperture, truthy, falsy, map, every, containsItemLast, reduceWhile, sameAs, head, filter, contains, split, tail, argTransform } = require("../../functions/")

const assert = require("assert")

// helpers
const stringToNumMap = map((s) => parseInt(s, 10))
const numToDigitArr = pipe(String, split(""), stringToNumMap)
const isZero = sameAs(0)
const allDigitsZero = every(isZero)
const inc = (n) => n + 1

// recursers
const _sequentialIncrementing = (a) => isNil(a[1])
  ? true
  : (head(a) + 1) % 10 === head(tail(a))
    ? _sequentialIncrementing(tail(a))
    : false

const _sequentialDecrementing = (a) => isNil(a[1])
  ? true
  : head(a) === (head(tail(a)) + 1)
    ? _sequentialDecrementing(tail(a))
    : false

const _everyDigitSame = (a) => isNil(a[1])
  ? true
  : head(a) === head(tail(a))
    ? _everyDigitSame(tail(a))
    : false

const _palindrome = (a) => isZero(a.length)
  ? true
  : head(a) === last(a)
    ? _palindrome(dropHeadAndTail(a))
    : false


const endingZeroes = pipe(numToDigitArr, tail, allDigitsZero)
const everyDigitSame = pipe(numToDigitArr, _everyDigitSame)
const sequentialIncrementing = pipe(numToDigitArr, _sequentialIncrementing)
const sequentialDecrementing = pipe(numToDigitArr, _sequentialDecrementing)
const palindrome = pipe(numToDigitArr, _palindrome)
const isGreaterThan99 = (num) => num > 99

const interestingFunctions = (awesomes) => [
  everyDigitSame,
  endingZeroes,
  sequentialDecrementing,
  sequentialIncrementing,
  palindrome,
  containsItemLast(awesomes)
]

const returnsTrue = (n) => (fn) => fn.call(this, n) === true
const returnsTrueGreaterThan99 = cond([
  [isGreaterThan99, returnsTrue],
  [T, always(F)]
])

const _isInteresting = curry((awesomes, n) => any(returnsTrueGreaterThan99(n), interestingFunctions(awesomes)))

const isInteresting = (mileage, awesomes) => {
  const interestingNumber = _isInteresting(awesomes)
  return argTransform([
    [identity, always(2)],
    [inc, always(1)],
    [pipe(inc, inc), always(1)],
  ])(interestingNumber)(mileage) || 0
}

// boring
assert.strictEqual(isInteresting(3, [1337, 256]), 0)
assert.strictEqual(isInteresting(3236, [1337, 256]), 0)

// progress as we near an "interesting" number
assert.strictEqual(isInteresting(11207, []), 0)
assert.strictEqual(isInteresting(11208, []), 0)
assert.strictEqual(isInteresting(11209, []), 1)
assert.strictEqual(isInteresting(11210, []), 1)
assert.strictEqual(isInteresting(11211, []), 2)

assert.strictEqual(isInteresting(11210, []), 1)
assert.strictEqual(isInteresting(11211, []), 2)
assert.strictEqual(isInteresting(1335, [1337, 256]), 1)
assert.strictEqual(isInteresting(1336, [1337, 256]), 1)
assert.strictEqual(isInteresting(1337, [1337, 256]), 2)
assert.strictEqual(isInteresting(7890, []), 2)
console.log("All tests passed!")

/*
// nearing a provided "awesome phrase"




Interesting:

Any digit followed by all zeros: 100, 90000
Every digit is the same number: 1111
The digits are sequential, incementing†: 1234
The digits are sequential, decrementing‡: 4321
The digits are a palindrome: 1221 or 73837
The digits match one of the values in the awesomePhrases array
*/
