//You are given a string consisting of the letters x and y, such as xyxxxyxyy.
//First, create an operation called flip, which changes a single x to y or vice versa.
//Determine how many times you would need to apply this operation to ensure that all xs come before all ys.
//In the preceding example, it suffices to flip the second and sixth characters, so you should return 2.

const flipCharacters = (str) => {

  const getLetterCountIn = (array, letterToCheck) => array.filter((letter) => letter === letterToCheck).length
  const strArray = str.split('')
  const candidateArray = []

  candidateArray.push(getLetterCountIn(strArray, 'x'))//save how many flips it would take if just changing all x to y?
  candidateArray.push(getLetterCountIn(strArray, 'y'))//save how many how many flips if we just change all y to x?

  //go through string changing where necessary, counting flips
  const flipCount = strArray.reduce((acc, letter, i) => {
    if (letter !== 'x') {//if the character is y
      let remainingCharacters = strArray.slice(i + 1)//get the remaining characters
      if (remainingCharacters.indexOf('x') > -1) acc++//if x appears in remaining characters, this is a flip, count it.
    }
    return acc
  }, 0)
  candidateArray.push(flipCount)

  return Math.min(...candidateArray) //return the flip count from candidates
}

let test = 'xyxxxyxyy'
test = 'xxxyx'
test = 'xxxxyyyyy'
test = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxy'
test = 'yxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxyxxxxxxxxxxxxxx'

console.log(flipCharacters(test))