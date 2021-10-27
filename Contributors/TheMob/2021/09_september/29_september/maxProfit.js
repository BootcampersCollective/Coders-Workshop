// Given an array of numbers representing the stock prices of a company in chronological order,
// write a function that calculates the maximum profit you could have made from buying and
// selling that stock once. You must buy before you can sell it.

// Try doing this problem without using a nested for-loop,
// i.e. only iterating through the array once.
// (This is referred to as being done in O(n) time, whereas a nested for-loop would be O(n^2).)

// Given the array `[9, 11, 8, 5, 7, 10]`, you should return `5`.
// That's the greatest profit that can be made,
// because you could

;[9, 11, 8, 5, 7, 10]

// buy the stock at 5 dollars and sell it at 10 dollars.

const exampleArray = [9, 11, 8, 5, 7, 10]
const otherArray = [1, 10000, 25, 46, 80]

function getMaxProfit(arr) {
  let maxProfit = 0
  while (arr.length > 1) {
    console.log('current arr: ', arr)
    const currentBuy = arr.shift()
    console.log('current buy: ', currentBuy)
    arr.forEach((elem) => {
      console.log('comparing ', elem, currentBuy)
      maxProfit = Math.max(maxProfit, elem - currentBuy)
    })
  }
  return maxProfit
}

console.log('Should equal 5: ', getMaxProfit(exampleArray))
console.log('Should equal a lot: ', getMaxProfit(otherArray))
