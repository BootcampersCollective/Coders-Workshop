
// Dice Game
// Alice wants to join her school's Probability Student Club. Membership dues are computed via one of two simple probabilistic games.
// The first game: roll a die repeatedly. Stop rolling once you get a five followed by a six. Your number of rolls is the amount you pay, in dollars.
// The second game: same, except that the stopping condition is a five followed by a five.
// Which of the two games should Alice elect to play? Does it even matter? Write a program to simulate the two games and calculate their expected value.

const rolls = (rollsArray, alertNumber, stopNumber) => {

  const getRandomIntegerBetween = (min, max) => Math.floor(Math.random() * ((max + 1) - min) + min)

  const roll = getRandomIntegerBetween(1, 6)//dice has 1-6 possiblities

  rollsArray.push(roll)

  if (rollsArray.length > 1 && rollsArray[rollsArray.length - 1] === stopNumber && rollsArray[rollsArray.length - 2] === alertNumber) {
    //there are at least 2 elements in rollsArray
    //the second to last element is alertNumber
    //the last element is stopNumber
    //console.log('rollsArray', rollsArray)
    return rollsArray.length //condition met, return it
  }

  return rolls(rollsArray, alertNumber, stopNumber)
}

const getExpectation = (alertNumber, stopNumber, tryCount) => {

  //build up some run results
  let runResults = []
  for (let index = 0; index < tryCount; index++) {
    runResults.push(rolls([], alertNumber, stopNumber))
  }

  const probability = 1 / runResults.length

  const mean = runResults.reduce((acc, count) => {
    acc += count * probability
    return acc
  }, 0)

  return Math.round(mean)

}

let expectedNumberOfRolls = getExpectation(5, 6, 100000)
console.log(expectedNumberOfRolls)

expectedNumberOfRolls = getExpectation(5, 5, 100000)
console.log(expectedNumberOfRolls)



/////////////////////////////////////////////////////////////
//failed ideas...

// const getExpectedValue = (tryCount, alertNumber, stopNumber) => {

//   const tries = []
//   for (let index = 0; index < tryCount; index++) {
//     tries.push(rolls([], alertNumber, stopNumber))
//   }

//   //To find expected value, multiply each outcome by its probability and add those results together.

//   //console.log('tries', tries)
//   let ev = tries.reduce((acc, b) => {
//     acc = acc + (b * (1 / 6))
//     return acc
//   }, 0)
//   //console.log('sum', sum)
//   //console.log('avg', sum / tries.length)

//   return ev
// }

// let fir = getAverageNumberOfRolls(100000000, 5, 6)
// console.log(fir)

// let sec = getAverageNumberOfRolls(100000000, 5, 5)
// console.log(sec)