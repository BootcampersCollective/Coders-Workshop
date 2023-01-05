const assert = require('assert');
/*
For example, given the array `[1, 2, 3, 4, 5, 6, 7, 8, 9]` and the predicate `const isEven = (num) => num % 2 === 0`, your function should return

```
[[2, 4, 6, 8], [1, 3, 5, 7, 9]]
```
partition(pred, arr)
create two blank arrays
iterate through array given, if something satisfies the predicate, push into array 1; otherwise add to array2
*/

function partition (pred, arr) {
// create two blank arrays
const success = [];
const failure = [];
// iterate through array given, if something satisfies the predicate, push into array 1; otherwise add to array2
arr.forEach(el => {
    if (pred(el)) {
        success.push(el);
    } else {
        failure.push(el);
    }
})
    return [success, failure];
}

// with a ternary (not desirable)
const partitionV2 = (array, pred) => {
  const success = [];
  const reject = [];
  array.forEach(el => pred(el) ? success.push(el) : reject.push(el));
  return [success, reject]
}


const isEven = (num) => num % 2 === 0

assert.deepStrictEqual(partition(isEven, [1, 2, 3, 4, 5, 6, 7, 8, 9]), [[2, 4, 6, 8], [1, 3, 5, 7, 9]]);
assert.deepStrictEqual(partition(isEven, []), [[], []]);

console.log('all tests passed!');
