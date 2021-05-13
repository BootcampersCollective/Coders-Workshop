// Create a function that takes another function, e.g. `myFunc`,
// as an argument and will return a new function that has the same behavior as `myFunc`
// but can only be called once.

// outer function state: how many times / if it's been called
// boolean: hasBeenCalled

// curried times function, more general way to create once
function times(num) {
  return function (func) {
    let timesCalled = 0
    return function (...args) {
      if (timesCalled < num) {
        hasBeenCalled = true
        timesCalled += 1
        return func(...args)
      }
      return
    }
  }
}

const log = (message1, message2) => console.log(message1, message2)

const once = times(1)
const twice = times(2)

const logOnce = once(log)
const logTwice = twice(log)

logOnce('hi', 'there') // hi there
logOnce('hi', 'there') // undefined
logOnce('hi', 'there') // undefined

logTwice('hello', 'young man') // hello young man
logTwice('hello', 'young man') // hello young man
logTwice('hello', 'young man') // undefined
