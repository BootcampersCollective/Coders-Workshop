//Max Profit
//Given an array of numbers representing the stock prices of a company in chronological order, write a function that calculates the maximum profit you could have made from buying and selling that stock once. You must buy before you can sell it.
//Try doing this problem without using a nested for-loop, i.e. only iterating through the array once. (This is referred to as being done in O(n) time, whereas a nested for-loop would be O(n^2).)
//## Example
//Given the array `[9, 11, 8, 5, 7, 10]`, you should return `5`. That's the greatest profit that can be made, because you could buy the stock at 5 dollars and sell it at 10 dollars.

const maxProfit1 = (prices) => {

  let minEnterPrice = prices[0]
  let exitPrice = prices[0]
  let maxProfit = 0

  prices.forEach((price) => {
    minEnterPrice = Math.min(price, minEnterPrice)
    const thisProfit = price - minEnterPrice
    maxProfit = Math.max(maxProfit, thisProfit)
    exitPrice = price
    console.log(`buy: ${minEnterPrice} sell: ${price} => profit: ${thisProfit}`)
  })

  console.log('enterPrice', minEnterPrice)
  console.log('exitPrice', exitPrice)

  return maxProfit
}

const maxProfit = (prices) => {

  let enterPrice = prices[0]
  let exitPrice = prices[0]
  let maxProfit = 0

  prices.forEach((enterPrice, i) => {
    prices.forEach((exitPrice, j) => {
      if (j > i) { //the exitPrice has to come after the enterPrice
        thisProfit = exitPrice - enterPrice
        maxProfit = Math.max(thisProfit, maxProfit)
        console.log(`buy: ${enterPrice} sell: ${exitPrice} => profit: ${thisProfit}`)
      }
    })
  })

  console.log('enterPrice', enterPrice)
  console.log('exitPrice', exitPrice)

  return maxProfit
}

let stockPrices = [9, 11, 8, 5, 7, 10]
console.log(maxProfit(stockPrices))
console.log(maxProfit1(stockPrices))

//https://medium.com/@lmonty22/big-o-notation-avoiding-nested-loops-2924f3002a08
//https://www.honeybadger.io/blog/a-rubyist-s-guide-to-big-o-notation/
//https://www.bigocheatsheet.com/
//https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/098478280X/ref=as_li_ss_tl?ie=UTF8&redirect=true&ref_=as_li_tl&linkCode=ll1&tag=bigocheatsheet-1-20&linkId=52f670296578886d22cacce6c054edff
//https://stackoverflow.com/questions/55987159/trying-to-optimize-my-code-to-either-remove-nested-loop-or-make-it-more-efficien
//https://medium.com/javascript-in-plain-english/algorithms-101-best-time-to-buy-and-sell-stock-in-javascript-7a2249b29495