// # Throttle

// Implement a throttle function to limit the number of function calls in 2 seconds.

// For example, if a function is called 10 times in 2 seconds,
// it should run only once, and other calls during that period should be ignored.
// If that function is called again after the 2 second period, it should run again.

// A function should never be executed more than once per every 2 seconds.

// Higher order function
function throttle(fn, ms) {
  let callable = true
  
  function funcToCall(...args) {
    if (callable) {
      callable = false
      setTimeout(() => callable = true, ms)
      fn.apply(this, args)
    } else {
      console.log("Slow down!")
    }
  }
  return funcToCall
}

function greet(name, timeOfDay, day, time) {
  console.log(`Good ${timeOfDay} ${name}! It's ${day} ${time}.`)
}

const throttledGreet = throttle(greet, 2000)
const dubThrottledOhGodWhy = throttle(throttledGreet, 10000)

throttledGreet('Alex', 'afternoon', 'Friday', '2 PM') // run
throttledGreet('John', 'morning') // throttle
throttledGreet() // throttle
setTimeout(() => throttledGreet('Bryan', 'evening', 'Wednesday', '7 PM'), 3000) // run