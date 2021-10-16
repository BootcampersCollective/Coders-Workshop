// Given a function that generates perfectly random numbers between 1 and k (inclusive),
// where k is an input, write a function that shuffles a deck of cards represented as an
//  array using only swaps.

// ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']

function bubbleSortShuffle(arr) {
  for (let i = 0; i < arr.length - 2; i += 1) {
    console.log(JSON.stringify(arr))
    const shouldSwap = !!Math.round(Math.random())
    if (shouldSwap) {
      const temp = arr[i + 1]
      arr[i + 1] = arr[i]
      arr[i] = temp
    }
  }
  return arr
}

console.log(
  bubbleSortShuffle(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'])
)
