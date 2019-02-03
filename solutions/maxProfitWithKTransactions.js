let stocks = [5, 11, 3, 50, 60, 90];

function maxProfitWithKTransactions(prices, k) {
  let profit = 0;
  let result = [];
  let a = [...prices].sort((a, b) => a - b);
  let sortIdx = prices.map(el => el = a.indexOf(el));

  console.log(prices);
  console.log(sortIdx);
  console.log(a);

      if ()) {
        result.push([el, ar[i + 1]])
      } else result.push(ar.slice(i + 1))
    });
  console.log(result)
    return profit;
}

console.log(maxProfitWithKTransactions(stocks, 2));

// var myMap = new Map();
// myMap.set(0, 'zero');
// myMap.set(1, 'one');
// for (var [key, value] of myMap) {
//   console.log(key + ' = ' + value);
// }
// 0 = zero
// 1 = one

// function logMapElements(value, key, map) {
//   console.log(`m[${key}] = ${value}`);
// }

// new Map([['foo', 3], ['bar', {}], ['baz', undefined]])
//   .forEach(logMapElements);

// expected output: "m[foo] = 3"
// expected output: "m[bar] = [object Object]"
// expected output: "m[baz] = undefined"
