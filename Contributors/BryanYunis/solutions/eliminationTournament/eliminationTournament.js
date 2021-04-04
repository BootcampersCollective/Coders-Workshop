const assert = require('assert')

function eliminationTournament(arr) {
  const results = []
  let currentRound = [...arr]
  let nextRound = []

  let keepGoing = true
  while (keepGoing) {
    if (nextRound.length === 1) {
      keepGoing = false
    }
    results.push(currentRound)
    nextRound = []
    for (let i = 0; i < currentRound.length; i += 2) {
      const firstRank = currentRound[i]
      const secondRank = currentRound[i + 1]
      if (!secondRank) {
        // uneven player, add to beginning of next round
        nextRound.unshift(firstRank)
        currentRound = nextRound
      } else {
        nextRound.push(Math.max(firstRank, secondRank))
      }
    }
    currentRound = nextRound
  }
  return results
}

assert.deepStrictEqual(eliminationTournament([9, 5, 4, 7, 6, 3, 8, 2]), [
  [9, 5, 4, 7, 6, 3, 8, 2],
  [9, 7, 6, 8],
  [9, 8],
  [9]
])
assert.deepStrictEqual(eliminationTournament([9, 5, 4, 7, 6, 3, 8]), [
  [9, 5, 4, 7, 6, 3, 8],
  [8, 9, 7, 6],
  [9, 7],
  [9]
])

console.log('👍')