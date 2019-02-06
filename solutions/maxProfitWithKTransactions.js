function maxProfitWithKTransactions(prices, k) {
  prices.push(0);
  let profits = [];

  let max = prices.filter((el, i, a) => {
    return el > a[i + 1];
  });
  max.sort((a, b) => a - b);

  let min = prices.filter((el, i, a) => {
    return el < a[i + 1];
  });
  min.sort((a, b) => a - b);

  for (let i = max.length; i > 0; i--) {
    profits.push(Math.max(...max) - Math.min(...min));
    min.splice(0, 1);
    max.pop();
  }

  k < profits.length ? (k = k) : (k = profits.length);

  let income = 0;
  for (let i = 0; i < k; i++) {
    income += profits[i];
  }
  return income;
}

console.log(maxProfitWithKTransactions([1], 1));
console.log(maxProfitWithKTransactions([1, 10], 3));
console.log(maxProfitWithKTransactions([5, 11, 3, 50, 60, 90], 2));
console.log(maxProfitWithKTransactions([5, 11, 3, 50, 60, 90], 3));
console.log(maxProfitWithKTransactions([5, 11, 3, 50, 40, 90], 2));
console.log(maxProfitWithKTransactions([3, 2, 5, 7, 1, 3, 7], 1));
