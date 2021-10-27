// You are given a string consisting of the letters `x` and `y`, such as `xyxxxyxyy`.
// xyxxxyxyy

// First, create an operation called flip,
// which changes a single x to y or vice versa.

// Determine how many times you would need to apply this operation
// to ensure that all `x`s come before all `y`s.
// In the preceding example, it suffices to flip the second and sixth characters,
// so you should return `2`.

// flip function: see if a char is x, return y, vice versa

// helper function: check if all x's come before y's

//
const allXFirst = (str) => {
  let y = false
  for (const i of str) {
    if (y) {
      if (i === 'x') return false
    }
    if (i === 'y') {
      y = true
    }
  }
  return true
}

const flipCharAtIndex = (str, i) => {
  // see if a char is x, return y, vice versa
  // take in entire string and index
  // split str into array, change char at index, join back to str
  const arr = str.split('')
  arr[i] = arr[i] === 'x' ? 'y' : 'x'
  const result = arr.join('')
  return result
}

const flip = (str) => {
  let str1 = str
  let str2 = str
  let str3 = str
  let str4 = str
  let c1 = 0
  let c2 = 0
  let c3 = 0
  let c4 = 0
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === 'x') {
      str1 = flipCharAtIndex(str1, i)
      c1 += 1
    }
    if (allXFirst(str1)) break
  }
  for (let i = str2.length - 1; i >= 0; i--) {
    if (str2[i] === 'x') {
      str2 = flipCharAtIndex(str2, i)
      c2 += 1
    }
    if (allXFirst(str2)) break
  }
  for (let i = 0; i < str3.length; i++) {
    if (str3[i] === 'y') {
      str3 = flipCharAtIndex(str3, i)
      c3 += 1
    }
    if (allXFirst(str3)) break
  }
  for (let i = str4.length - 1; i >= 0; i--) {
    if (str4[i] === 'y') {
      str4 = flipCharAtIndex(str4, i)
      c4 += 1
    }
    if (allXFirst(str4)) break
  }
  console.log(c1, c2, c3, c4)
}

const flip2 = (str) => {
  // You are given a string consisting of the letters `x` and `y`, such as `xyxxxyxyy`.
  // [{x:1}, {y:1}, ...]
  // x - 1
  // y - 1
  // x - 3
  // y - 1
  // x - 1
  // y - 2
}
console.log(flip('xyxyyy'))
console.log(flip('xxxyyyx'))
// xyxyyy
// loop through string
// if the character is x, continue
// if the character is y
//   check to see if there is an x in the remaining characters
//   if so, flip the y, count it
// iteration 1: x (continue)
// iteration 2: y (does x appear in 'xyyy'? yes. so, flip this y. count it.)
// iteration 3: x (continue)
// iteration 4: y (does x appear in 'yyy'? no. don't flip this y)
// 1

// xyxyyx
// iteration 1: x (continue)
// iteration 2: y (does x appear in 'xyyx'? yes. so, flip this y. count it.)
// iteration 3: x (continue)
// iteration 4: y (does x appear in 'yx'? yes, so flip this y. count it.)
// iteration 4: y (does x appear in 'x'? yes, so flip this y. count it.)
// 3
