// The `take` function accepts an integer `n` and an array `arr`
// and returns a new array with the first `n` elements of `arr`.
// For example, `take(2, [1, 2, 3, 4, 5])` should return `[1, 2]`.
// Implement `take`.

// curry example
function multiply(x) {
  return function (y) {
    return x * y
  }
}
const double = multiply(2)

function take(n) {
  return function (arr) {
    return arr.slice(0, n)
  }
}
// or with an arrow function (a lot more terse):
// const take = (n) => (arr) => arr.slice(0, n)

const takeFive = take(5) // take5 is a function that expects an arr from which to take 5

console.log(takeFive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // [1, 2, 3, 4, 5]
