
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

const getExpected = (alertNumber, stopNumber) => {

  let tryCount = 100000

  //build up 100000 run results, recording how many rolls it took to reach goal.
  let runResults = []
  for (let index = 0; index < tryCount; index++) {
    runResults.push(rolls([], alertNumber, stopNumber))
  }

  //To find expected value, multiply each outcome by its probability and add those results together.
  const expectedValue = runResults.reduce((acc, resultCount) => {
    acc += resultCount * (1 / runResults.length)// acc = acc + (this resultCount * probability)
    return acc
  }, 0)

  return Math.round(expectedValue)

}

let expectedNumberOfRolls = getExpected(5, 6)
console.log(expectedNumberOfRolls)

expectedNumberOfRolls = getExpected(5, 5)
console.log(expectedNumberOfRolls)

// Alice should choose to roll 5 then 6, because it can be expected to have to roll 36 times to reach that sequence, on average.
// If she chooses 5 then 5, she can expect to have to roll 42 times to reach the sequence, on average.