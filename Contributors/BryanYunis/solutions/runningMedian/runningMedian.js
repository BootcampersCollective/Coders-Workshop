const assert = require('assert')

const insertSorted = (num, arr) => {
  let i = 0
  while (arr[i] < num && arr.length) {
    i++
  }
  const arrCopy = arr.slice()
  arrCopy.splice(i, 0, num)
  return arrCopy
}

const isEven = (num) => num % 2 === 0

const getMedian = (arr) => {
  if (!isEven(arr.length)) {
    return arr[Math.ceil(arr.length / 2) - 1]
  }
  const medianItems = [arr[arr.length / 2 - 1], arr[arr.length / 2]]
  return medianItems.reduce((a, b) => a + b) / 2
}

const runningMedian = (arr) => {
  let sortedArr = []
  const runningMedians = []
  arr.forEach((num) => {
    sortedArr = insertSorted(num, sortedArr)
    runningMedians.push(getMedian(sortedArr))
  })
  return runningMedians
}

/**
 * Test function to satisfy problem requirement of printing each running median
 * @param {Array} solution result
 * @returns void
 */
const print = (arr) => arr.forEach((n) => console.log(n))
print(runningMedian([2, 1, 5, 7, 2, 0, 5]))

assert.deepStrictEqual(
  insertSorted(3, [1, 2, 4]),
  [1, 2, 3, 4],
  'Insert sorted test failed'
)

assert.strictEqual(isEven(2), true, 'isEven test failed')
assert.strictEqual(isEven(3), false, 'isEven test failed')
assert.strictEqual(getMedian([1, 2, 3]), 2, 'getMedian test failed')
assert.strictEqual(getMedian([1, 2, 3, 4]), 2.5, 'getMedian test failed')

assert.deepStrictEqual(
  runningMedian([2, 1, 5, 7, 2, 0, 5]),
  [2, 1.5, 2, 3.5, 2, 2, 2],
  'Running median test failed'
)
