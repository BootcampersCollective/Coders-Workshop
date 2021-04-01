// # What's in a Prime Number

// Write a function to determine whether a number is prime.

// For example, input `1709` should return `true`.
// Input `8` should return false.

// can be divided by itself and 1 w/o remainder
// 2, 3, 5, 7, 11, 13, 17

function isPrime(num) {
  // if (typeof num !== 'number') throw new TypeError('Should be a number')
  if (typeof num !== 'number') return null

  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      return false
    }
    return true
  }
}

console.log(isPrime(1709)) // true
console.log(isPrime(7)) // false
console.log(isPrime(8)) // false
console.log(isPrime(() => 'arrow function')) // null
