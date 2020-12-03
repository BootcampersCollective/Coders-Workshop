const { isPrime } = require("./isPrime"); 

/* some test pairs 
 * 0 index => test number 
 * 1 index => expected result */
const testPairs = [
  [3, true], [5, true], [4, false], [10, false],
  [9, true], [7, true], [8, false], [16, false], 
  [21, false], [15, false], [90, false], [41, true]
]

/** tests...  */
testPairs.forEach(pair => {
  test(`${pair[0]} ${pair[1] ? 'is' : 'is not'} prime`, () => {
    expect(isPrime(pair[0])).toEqual(pair[1])
  })
})