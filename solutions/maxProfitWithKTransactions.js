function maxProfitWithKTransactions(prices, k) {
  let buyDays = [];
  let markLowDays = [];
  let temp = [];
  let sellDays = [];
  let matrix = [];

  // Mark & capture low buy days, and high sell days;
  prices.forEach((el, i, a) => {
    if (el < a[i + 1]) {
      markLowDays.push([el]);
      buyDays.push(el);
    } else if (el > a[i - 1] && el > a[i + 1]) {
      sellDays.push(el);
      markLowDays.push(el);
    } else markLowDays.push(el);
  });

  // Add buyDays matrices.
  buyDays.forEach((el, idx, a) => {
    temp.push([]);
    let buyIndex = prices.indexOf(buyDays[idx]);
    temp[idx].splice(buyIndex, 1, buyDays[idx]);
    matrix.push([temp[idx], [...sellDays]]);
  });

  console.log(matrix);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i][1].length; j++) {
      matrix[i][1][j] -= matrix[i][0];

    }
    console.log(matrix);
  }

  // let income = 0;
  // for (; k > 0; k--) {
  // income += profits[k];
  // }
  // console.log(profits);
  // return profits[0] === -Infinity ? 0 : income;
}

// console.log(maxProfitWithKTransactions([5, 11, 3, 50, 40, 90], 2)); // 97
// console.log(maxProfitWithKTransactions([50, 25, 12, 4, 3, 10, 1, 100], 2)); // 106
console.log(
  "T-15: ",
  maxProfitWithKTransactions([1, 25, 24, 23, 12, 36, 14, 40, 31, 41, 5], 2)
); // 62
// console.log(maxProfitWithKTransactions([1], 1)); // 0
// console.log(maxProfitWithKTransactions([5, 11, 3, 50, 40, 90], 2)); // 97
// console.log(maxProfitWithKTransactions([50, 25, 12, 4, 3, 10, 1, 100], 2)); // 106
// console.log(maxProfitWithKTransactions([100, 99, 98, 97, 1], 5)); // 0
// console.log(maxProfitWithKTransactions([1, 25, 24, 23, 12, 36, 14, 40, 31, 41, 5], 2)); // 62
