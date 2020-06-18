// Array.prototype.reduce(), Array.prototype.map(), Array.prototype.forEach(), Array.prototype.filter(), Array.prototype.find()
const assert = require('assert');


const filter = (array, fn) => {
  if (!Array.isArray(array) || typeof fn !== 'function') {
    return []
  }
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    // if elements pass function parameters, push onto new array
    
    if (fn(array[i])) {
      newArray.push(array[i])
    }
  }
  return newArray
}

const testFn = (val) => {
  return val > 2
}

const array = [1, 2, 3]


// Test Cases
assert.deepStrictEqual(filter(array, testFn), [3])

console.log('All tests passed!')