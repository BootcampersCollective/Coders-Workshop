const assert = require('assert')

const getLength = (vertical) => (row, col, matrix) => {
  let count = 0
  while (matrix[row] && matrix[row][col] && matrix[row][col] === 1) {
    count += 1
    if (vertical) {
      row += 1
    } else {
      col += 1
    }
  }
  return count
}

const getHorizontalLength = getLength(false)
const getVerticalLength = getLength(true)

const findLargestRect = (matrix) => {
  let maxRectangleSize = 0
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 1) {
        const horizontalLength = getHorizontalLength(row, col, matrix)
        let i = 0
        let minVerticalLength = null
        while (i < horizontalLength) {
          const verticalLength = getVerticalLength(row, col + i, matrix)
          if (!minVerticalLength) {
            minVerticalLength = verticalLength
          }
          minVerticalLength = Math.min(minVerticalLength, verticalLength)
          i++
        }
        maxRectangleSize = Math.max(
          horizontalLength * minVerticalLength,
          maxRectangleSize
        )
      }
    }
  }
  return maxRectangleSize
}

assert.strictEqual(
  findLargestRect([
    [1, 0, 0, 0],
    [1, 0, 1, 1],
    [1, 0, 1, 1],
    [0, 1, 0, 0]
  ]),
  4
)
assert.strictEqual(
  findLargestRect([
    [1, 0, 0, 0],
    [1, 0, 1],
    [1, 0, 1],
    [0, 1, 0]
  ]),
  3
)
assert.strictEqual(
  findLargestRect([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]),
  0
)

assert.strictEqual(findLargestRect([[1]]), 1)
console.log('👍')
