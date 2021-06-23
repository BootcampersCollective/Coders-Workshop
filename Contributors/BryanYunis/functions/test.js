const assert = require("assert")
const { curry,
  reduce,
  every,
  assoc,
  contains,
  containsItemLast,
  dropHeadAndTail,
  argTransform,
  any,
  always,
  map,
  sameAs,
  prop,
  propOr,
  cond,
  filter,
  T,
  dropN,
  pipe,
  isNil,
  aperture,
  compose,
  reduceWhile } = require("./index.js")

// helpers
const lessThan5 = (n) => n < 5
const double = (n) => n * 2
const increment = (n) => n + 1
const doubleIncrement = (n) => pipe(increment, increment)
const square = (n) => n ** 2

// curry
const curriedAdd = curry((a, b) => a + b)
const partial = curriedAdd(3)
const complete = partial(3)
assert.strictEqual(typeof partial, "function")
assert.strictEqual(complete, 6)

// reduce
const oneThrough5 = [1, 2, 3, 4, 5]
const sumReducer = (a, c) => a + c
assert.strictEqual(reduce(sumReducer, 0, oneThrough5), 15)

// reduceWhile
const sumLessThan10 = (a, c) => a + c < 10
assert.strictEqual(reduceWhile(sumLessThan10, sumReducer, 0, oneThrough5), 10)

// any
assert.strictEqual(any(lessThan5, [1, 5, 6]), true)
assert.strictEqual(any(lessThan5, [5, 5, 6]), false)

// every
assert.strictEqual(every(lessThan5, [1, 5, 6]), false)
assert.strictEqual(every(lessThan5, [1, 2, 3]), true)

// contains
assert.strictEqual(contains("kitten", ["kitten", "winston"]), true)
assert.strictEqual(contains("kitten", ["mitten", "winston"]), false)

// containsItemLast
const arr = [1, 2, 3, 4]
const inArr = containsItemLast(arr)
assert.strictEqual(inArr(2), true)
assert.strictEqual(inArr(8), false)
// map
assert.deepStrictEqual(map((n) => n * 2, [1, 2, 3]), [2, 4, 6])

// filter
assert.deepStrictEqual(filter((n) => n > 3, [1, 2, 3, 4]), [4])

// pipe
const doubleIncrementer = pipe(double, increment)
assert.deepStrictEqual(doubleIncrementer(3), 7)
assert.deepStrictEqual(doubleIncrementer(5), 11)

// compose
const incrementDoubler = compose(double, increment)
assert.deepStrictEqual(incrementDoubler(3), 8)
assert.deepStrictEqual(incrementDoubler(5), 12)

// aperture
assert.deepStrictEqual(aperture(2, [1, 2, 3, 4, 5]), [[1, 2], [2, 3], [3, 4], [4, 5]])
assert.deepStrictEqual(aperture(3, [1, 2, 3, 4, 5]), [[1, 2, 3], [2, 3, 4], [3, 4, 5]])
assert.deepStrictEqual(aperture(7, [1, 2, 3, 4, 5]), [])

// dropHeadAndTail
assert.deepStrictEqual(dropHeadAndTail([1, 2, 3, 4, 5]), [2, 3, 4])

// dropN
assert.deepStrictEqual(dropN(3, [1, 2, 3, 4, 5]), [3, 4, 5])

// isNil
assert.strictEqual(isNil(0), false)
assert.strictEqual(isNil(null), true)

// cond
const testCond = cond([
  [lessThan5, always("it is less than 5")],
  [sameAs(8), always("it is 8 on the nose")],
  [T, always("it is greater than 5 and not 8")]]
)
assert.strictEqual(testCond(8), "it is 8 on the nose")
assert.strictEqual(testCond(7), "it is greater than 5 and not 8")

// argTransform
const testArgTransform = argTransform([
  [ increment, always( "add one works" )],
  [ doubleIncrement, always( "add two works" ) ],
  [ square, always( "square it works" ) ]
])
assert.strictEqual(testArgTransform(sameAs(5), 4), "add one works")
assert.strictEqual(testArgTransform(sameAs(25), 5), "square it works")

// assoc
assert.deepStrictEqual(assoc("name", "winston", {}), {name: "winston"})

// prop
const obj = {name: "kittens"}
assert.deepStrictEqual(prop("name", obj), "kittens")

// propOr
assert.deepStrictEqual(propOr("not found", "age", obj), "not found")

console.log("All tests passed!")

