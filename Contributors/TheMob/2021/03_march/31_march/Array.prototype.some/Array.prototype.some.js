// # Array.Prototype.some

// Implement the method `Array.Prototype.some()` according
// to the [MDN spec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some).
// The method can be run independently of the array upon which it is acting.

// E.g. `some([1, 2, 3], (val) => val < 2)` should return `true`.

// `some` logic:
// callback is called for every item
// [1, 2, 3]
//  ^  ^  ^

Array.prototype.someAlt = function (callback) {
  for (let i = 0; i < this.length; i += 1) {
    const arrItem = this[i]
    if (callback(arrItem, i, this)) {
      return true
    }
  }
  return false
}

const arr = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(
  arr.someAlt((val, i, arr) => {
    console.log(val, i, arr)
  })
)
