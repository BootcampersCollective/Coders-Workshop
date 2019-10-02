#!/usr/bin/env node

const assert = require('assert')

const moveFnGen = function*() {
  while (true) {
    yield (r, c) => [r, c + 1] // right
    yield (r, c) => [r + 1, c] // down
    yield (r, c) => [r, c - 1] // left
    yield (r, c) => [r - 1, c] // up
  }
}

const traverse = matrix => {
  const height = matrix.length
  const width = matrix[0].length
  const visited = Array.from({ length: height }, () =>
    Array.from({ length: width }).fill(false),
  )
  const res = []
  const moveFns = moveFnGen()
  let moveFn = moveFns.next().value
  let [r, c] = [0, 0]

  const isValidPos = (r, c) =>
    r >= 0 && r < height &&
    c >= 0 && c < width  &&
    !visited[r][c]

  while (true) {
    res.push(matrix[r][c])
    visited[r][c] = true
    let [nr, nc] = moveFn(r, c)
    if (isValidPos(nr, nc)) {
      ;[r, c] = [nr, nc]
    } else {
      moveFn = moveFns.next().value
      ;[nr, nc] = moveFn(r, c)
      if (isValidPos(nr, nc)) {
        ;[r, c] = [nr, nc]
      } else {
        return res
      }
    }
  }
}

const actual = traverse([
  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
])
const expected = [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

assert.strict.deepEqual(actual, expected)
