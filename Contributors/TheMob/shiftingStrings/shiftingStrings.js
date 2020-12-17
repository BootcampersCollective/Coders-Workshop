// Given two strings A and B, return whether or not A can be shifted some number of times to get B.
// For example, if A is `abcde` and B is `cdeab`, return `true`. If A is `abc` and B is `acb`, return `false`.

// are all the characters in one string in the other
// match shifting strings to one another
// shift elements to end of array

// slice it up!

const shiftingStrings = (a, b) => {
  // ALL YOU!
  // quickly rule out strings not being the same size
  if (a.length !== b.length) {
    return false
  }
  if (a === b) {
    return true
  }
  let returnVal = false
  for (let i = 1; i < b.length - 1; i++) {
      returnVal = a.slice(i) + a.slice(0, i) === b;
      if (returnVal) break
  }
  return returnVal
}


console.log(shiftingStrings('abcde', 'cdeab'))
console.log(shiftingStrings('abc', 'acb'))
module.exports = shiftingStrings;