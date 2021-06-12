// # Snail Sort
//
// <https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1>
//
// Given an n x n array, return the array elements arranged
// from outermost elements to the middle element, traveling clockwise.
// ```
// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// ```
//
// For better understanding, please follow the numbers of the next array consecutively:
// ```
// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// ```
//
// NOTE:
//   The idea is not sort the elements from the lowest value to the highest;
//   the idea is to traverse the 2-d array in a clockwise snailshell pattern.
//
// NOTE 2:
//   The 0x0 (empty matrix) is represented as en empty array inside an array `[[]]`.

const assert = require("assert")

const snail = array => {
  const resultArray = []
  const cycle = () => {
    for (let i = 0; i < 4; i++) {
      if (i === 0) {
        // top
        // all array
        for (const tai of array[0]) resultArray.push(tai)
      }
      if (i === 1) {
        // right
        // starting from [1]
        for (const ra of array.slice(1)) resultArray.push(ra[ra.length - 1])
      }
      if (i === 2) {
        // bottom
        // starting from [1] reversed
        const botArray = [...array[array.length - 1].slice(0, -1).reverse()]
        for (const bai of botArray) resultArray.push(bai)
      }
      if (i === 3) {
        // left
        // starting from [1] reversed ending at [-1]
        for (const la of [...array.slice(1, -1)].reverse()) resultArray.push(la[0])
      }
    }
  }

  while (true) {
    if (!array.length) break
    cycle()
    // making the square smaller by 1 on all sides
    // [0] and [-1] arrays should be dropped altogether (top and bottom)
    array.shift()
    array.pop()
    // every array should lose 1 on the left and right
    for (const a of array) {
      a.shift()
      a.pop()
    }
  }
  return resultArray
}

// console.log(
//   snail([
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25]
//   ])
// );

assert.deepStrictEqual(snail([[]]), [])
assert.deepStrictEqual(snail([[1]]), [1])
assert.deepStrictEqual(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]),
  [1, 2, 3, 6, 9, 8, 7, 4, 5]
)

console.log("All tests passed!")
