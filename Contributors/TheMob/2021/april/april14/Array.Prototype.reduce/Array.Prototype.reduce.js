// Implement the method `Array.Prototype.reduce()` according to the [MDN spec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). The method can be run independently of the array upon which it is acting.

// E.g. `reduce([1, 2, 3], (accum, curr) => curr + accum )` should return `6`.

;[1, 2, 3].reduce((accum, curr) => accum + curr) // result = 6
;[1, 2, 3].reduce((accum, curr) => accum + curr, 10) // result = 16
//                                               ^^ - initVal

const reduce = (arr, cb, initVal) => {
  // iterate over the array

  let acc = initVal

  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i]

    if (i === 0 && !initVal) {
      if (typeof currentItem === 'number') {
        console.log('this is a number')
        acc = 0
      } else if (typeof currentItem === 'string') {
        console.log('this is a string')
        acc = ''
      }
    }

    acc = cb(acc, currentItem, i)
    console.log('acc', acc, 'currentItem', currentItem, 'index', i)
  }
  return acc
}

console.log(reduce([1, 2, 3], (accum, curr) => accum + curr))
console.log(reduce(['a', 'b', 'c'], (accum, curr) => accum + curr)) // 'oop123abc'

interface IProps {
  name: Number | String;
  age: Number;
}

type kitten {
    name: String,
    

}