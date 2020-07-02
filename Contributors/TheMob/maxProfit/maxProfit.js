// Given an array of numbers representing the stock prices of a company in chronological order, 
// write a function that calculates the maximum profit you could have made from buying and selling that stock once. 

// You must buy before you can sell it.

// Given the array `[9, 11, 8, 5, 7, 10]`, you should return `5`. 
// That's the greatest profit that can be made, because you could buy the stock at 5 dollars and sell it at 10 dollars.


const assert = require('assert')
// one WIP solution:
const maxProfit = arr => {
    let endOfArr = arr.length - 1;
    let lowestPriceSoFar = arr[endOfArr];
    let lowestPriceTime = 0;
    let highestPriceTime = 0;
    let highestPriceSoFar = arr[0];

    arr.forEach((price, i) => {
        if (price < lowestPriceSoFar) {
            lowestPriceSoFar = price;
            lowestPriceTime = i;
        };
        if (price > highestPriceSoFar) {
            highestPriceSoFar = price;
            highestPriceTime = i;
        };
            
    })       
    const value = (i) => {
        if (highestPriceTime > lowestPriceTime) {
            return highestPriceSoFar - lowestPriceSoFar;
        };
    }
}


const maxProfit2 = arr => {
    let minPriceSoFar = arr[0];
	let maxProfitSoFar = -Infinity;
  
    for (let t=1; t < arr.length; t++) {
        maxProfitSoFar = Math.max(maxProfitSoFar, arr[t] - minPriceSoFar);
        minPriceSoFar = Math.min(minPriceSoFar, arr[t]);
    }
  
    return maxProfitSoFar;
}

assert.deepStrictEqual(maxProfit2([9, 11, 8, 5, 7, 10]), 5)

console.log('All tests passed.')

