/*

```
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

concat(arr1, arr2); // returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

Or


```
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [];
const arr3 = [6]

concat(arr1, arr2, arr3); // returns [1, 2, 3, 4, 5, 6]

take all the args with spread operator
iterate through the args
add them to new array that we'll create, then return
iterate through
*/

function concat(...args) {
  const result = [];
  if (args.length === 0) return result;

  // iterate through the args
  for (let i of args) {
    if ((Array.isArray(i) || typeof i === 'string') && i.length) {
      for (let j of i) {
        result.push(j);
      }
    } else if (typeof i === 'number') {
      result.push(i);
    }
  }

  if (typeof args[0] === 'string') {
   return result.join('');
  }

  return result;
};

const arr1 = [1, 2, 3, 4, 5];
const arr2 = 7;
const arr3 = [6]

// returns [1, 2, 3, 4, 5, 6]
console.log(concat(arr1, arr2, arr3));

const arr4 = 'ONE';
const arr5 = '';
const arr6 = 'X';

console.log(concat(arr4, arr5, arr6));
