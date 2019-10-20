// The "simpler" way of tackling this problem is to iterate through the array with a nested for-loop, comparing each value of the array
// with a previous value, and returning the largest of those differences. This is not trivial, so solving it should not be minimized! However,
// it would be far more ideal to solve it without a nested for-loop, which we can achieve by iterating through the loop backwards,
// and, in a sense, backwards through time.

// If we see a high price x and then a higher price y afterwards,
// then we can always discard x. So, if we keep track of the highest price in the future for each variable,
// we can immediately find how much profit buying at that price can make.

const maxProfitSimpler = arr => {
  let currentMax = 0
  let maxProfit = 0
  let reversedArr = arr.reverse()

  for (let i = 0; i < reversedArr.length; i++) {
    if (reversedArr[i] > currentMax) {
      currentMax = reversedArr[i]
    }
    let potentialProfit = currentMax - reversedArr[i]
    if (potentialProfit > maxProfit) {
      maxProfit = potentialProfit
    }
  }
  return maxProfit
}
console.log(maxProfitSimpler([9, 11, 8, 5, 7, 10]))
