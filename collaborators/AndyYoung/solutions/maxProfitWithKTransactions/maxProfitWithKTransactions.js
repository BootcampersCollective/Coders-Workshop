function maxProfitWithKTransactions(prices, k) {
  let buyDays = [];
  let markLowDays = [];
  let sellDays = [];
  let profitVector = [];
  let kTransactions = new Map();
  let profitMap = new Map();

  // Create Map, holding max profits, all transactions up-to & including 'k'.
  for (let i = k; i > 0; i--) {
    kTransactions.set(i, new Array(i));
  }
  console.log(kTransactions);

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

  buyDays.forEach(el => {
    profitMap.set(el, prices.slice(prices.indexOf(el) + 1))
  });

  profitMap.forEach((value, key, map) => {
    let n = value.map(el => el - key);
    map.set(key, n);
    profitVector.push(n)
  })

  // let m1 = profitMap.values();
  // console.log(m1.next().value.length)
  // console.log(m1.next().value)

  // Create buyDays matrices.
  // buyDays.forEach((el, idx, a) => {
  //   temp.push([]);
  //   let buyIndex = prices.indexOf(buyDays[idx]);
  //   temp[idx].splice(buyIndex, 1, buyDays[idx]);
  //   matrix.push([temp[idx].shift(), [...sellDays]]);
  //   sellDays.shift();
  // });

  console.log(profitMap);
  console.log(profitVector);

  for (let i = 0; i < profitVector[0].length; i++) {
    for (let j = 1; j < profitVector[j].length; j++) {
      console.log(profitVector[j].map(el => el + profitVector[0][i]));
    }
  }

  console.log(kTransactions);


  // return profits[0] === -Infinity ? 0 : income;
}
// ===================================================================================
// console.log(maxProfitWithKTransactions([5, 11, 3, 50, 40, 90], 2)); // 97
// console.log(maxProfitWithKTransactions([50, 25, 12, 4, 3, 10, 1, 100], 2)); // 106
// console.log("15:", maxProfitWithKTransactions([1, 25, 24, 23, 12, 36, 14, 40, 31, 41, 5], 2)); // 62
// console.log(maxProfitWithKTransactions([1], 1)); // 0
console.log(maxProfitWithKTransactions([5, 11, 3, 50, 60, 90], 2)); // 93
// console.log(maxProfitWithKTransactions([50, 25, 12, 4, 3, 10, 1, 100], 2)); // 106
// console.log(maxProfitWithKTransactions([100, 99, 98, 97, 1], 5)); // 0
