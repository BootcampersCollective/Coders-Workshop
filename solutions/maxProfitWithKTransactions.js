function maxProfitWithKTransactions(prices, k) {
  let buyDays = [];
  let markLowDays = [];
  let temp = [];
  let sellDays = [];
  let matrix = [];

  // Create Map, holding max profits, all transactions up-to & including 'k'.
  let profitMap = new Map();
  for (let i = k; i > 0; i--) {
    profitMap.set(i, new Array(i));
  }
  console.log(profitMap);

  // Mark & capture lowBuy & highSell days;
  prices.forEach((el, i, a) => {
    if (el < a[i + 1]) {
      markLowDays.push([el]);
      buyDays.push(el);
    } else if (el > a[i - 1] && el > a[i + 1]) {
      sellDays.push(el);
      markLowDays.push(el);
    } else markLowDays.push(el);
  });

  // Create buyDays matrices.
  buyDays.forEach((el, idx, a) => {
    temp.push([]);
    let buyIndex = prices.indexOf(buyDays[idx]);
    temp[idx].splice(buyIndex, 1, buyDays[idx]);
    matrix.push([temp[idx].shift(), [...sellDays]]);
    sellDays.shift();
  });

  // Get all profits for every conceivable transaction.
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i][1].length; j++) {
      matrix[i][1][j] -= matrix[i][0];
    }
  }
  console.log(matrix);


  // 'profitVector' temporarily holds the highest profit for every 'k' combo.
  let pVector = [];

  const vectorizeProfits = (kTrans = 1) => {
    matrix.forEach(e => pVector.push(...e[1]));
    profitMap.set(kTrans, Math.max(...pVector));
    matrix.splice(1, 1);
    matrix[0][1].splice(0, 1)
    console.log(matrix);
    console.log(profitMap);
    console.log(pVector);
    pVector = [];
  }
  vectorizeProfits();

  console.log(matrix);

  console.log(profitMap);

  matrix.forEach((el, i, a) => {
    console.log(el[1][0]);
  })

  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][1][0]);
    for (let j = i; j < matrix.length; j++) {
    console.log(i);
    console.log(j);
    console.log(matrix[j + 1][1][i]);
    console.log(matrix[i][i + 1][j]);
    }
  }



  for (
    let i = 0, j = matrix.length - 1;
    i < matrix.length && j >= 0;
    i++, j--
    ) {
    console.log(matrix[j][1][i] + matrix[1][0]);
    matrix[i];
  }

  // let income = 0;
  // for (; k > 0; k--) {
  // income += profits[k];
  // }
  // console.log(profits);
  // return profits[0] === -Infinity ? 0 : income;
}
// ===================================================================================
// console.log(maxProfitWithKTransactions([5, 11, 3, 50, 40, 90], 2)); // 97
// console.log(maxProfitWithKTransactions([50, 25, 12, 4, 3, 10, 1, 100], 2)); // 106
console.log(
  "15:",
  maxProfitWithKTransactions([1, 25, 24, 23, 12, 36, 14, 40, 31, 41, 5], 2)
); // 62
// console.log(maxProfitWithKTransactions([1], 1)); // 0
// console.log(maxProfitWithKTransactions([5, 11, 3, 50, 40, 90], 2)); // 97
// console.log(maxProfitWithKTransactions([50, 25, 12, 4, 3, 10, 1, 100], 2)); // 106
// console.log(maxProfitWithKTransactions([100, 99, 98, 97, 1], 5)); // 0
// console.log(maxProfitWithKTransactions([1, 25, 24, 23, 12, 36, 14, 40, 31, 41, 5], 2)); // 62
