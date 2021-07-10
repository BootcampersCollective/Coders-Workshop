const assert = require("assert")
const validArr = (arr) => arr.length === 9 && [...new Set(arr)].length === 9 && arr.every((item) => item !== 0)
const getCol = (nestedArr, i) => nestedArr.reduce((col, row) => col.concat(row[i]), [])
const validCol = (board, i) => validArr(getCol(board, i))
const validBlocks = (board) => {
  let isValid = false
  let block = []
  for (let startCol = 0; startCol < board.length; startCol += 3) {
    for (let row = 0; row < board[0].length; row++) {
      block = block.concat(board[row].slice(startCol, startCol + 3))
      if (block.length === 9 && validArr(block)) {
        isValid = true
        break
      }
    }
  }
  return isValid
}

const validSudoku = (board) =>
  board.every((row) => validArr(row))
  && board.every((row, i) => validCol(board, i))
  && validBlocks(board)

const validBoard = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]


const invalidBoard1 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]

const invalidBoard2 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 7, 5, 2, 8, 6, 1, 4, 9]
]


assert.strictEqual(validSudoku(validBoard), true)
assert.strictEqual(validSudoku(invalidBoard1), false)
assert.strictEqual(validSudoku(invalidBoard2), false)
console.log("All tests passed!")
