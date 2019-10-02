function maxProfitWithKTransactions(prices, k) {
  if (!prices.length) return 0;

  let profits = [];

  for (let t = 0; t < k + 1; t++) {
    const row = (new Array(prices.length)).fill(0);
    profits.push(row)
  }
  for (let t = 1; t < k + 1; t++) {
    let maxThusFar = -Infinity;
    for (let d = 1; d < prices.length; d++) {
      maxThusFar = Math.max(maxThusFar, profits[t - 1][d - 1] - prices[d - 1]);
      profits[t][d] = Math.max(profits[t][d - 1], maxThusFar + prices[d]);
    }
  }
  return profits[k][prices.length - 1];
}

// Tests ======================================================================
console.log("T1", maxProfitWithKTransactions([], 1)); // 0
console.log("T2", maxProfitWithKTransactions([1], 1)); // 0
console.log("T3", maxProfitWithKTransactions([1, 10], 1)); // 9
console.log("T4", maxProfitWithKTransactions([1, 10], 3)); // 9
console.log("T5", maxProfitWithKTransactions([3, 2, 5, 7, 1, 3, 7], 1)); // 6
console.log("T6", maxProfitWithKTransactions([5, 11, 3, 50, 60, 90], 2)); // 93
console.log("T7", maxProfitWithKTransactions([5, 11, 3, 50, 60, 90], 3)); // 93
console.log("T8", maxProfitWithKTransactions([5, 11, 3, 50, 40, 90], 2)); // 97
console.log("T9", maxProfitWithKTransactions([5, 11, 3, 50, 40, 90], 3)); // 103
console.log("T10", maxProfitWithKTransactions([50, 25, 12, 4, 3, 10, 1, 100], 2)); // 106
console.log("T11", maxProfitWithKTransactions([100, 99, 98, 97, 1], 5)); // 0
console.log("T12", maxProfitWithKTransactions([1, 100, 2, 200, 3, 300, 4, 400, 5, 500], 5)); // 1485
console.log("T13", maxProfitWithKTransactions([1, 100, 101, 2, 200, 201, 3, 300, 301, 4, 400, 401, 5, 500], 5)); // 499
console.log("T14", maxProfitWithKTransactions([1, 25, 24, 23, 12, 36, 14, 40, 31, 41, 5], 4)); // 84
console.log("T15", maxProfitWithKTransactions([1, 25, 24, 23, 12, 36, 14, 40, 31, 41, 5], 2)); // 62
