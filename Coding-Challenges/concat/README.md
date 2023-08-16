# Concat

Reimplement [concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat).

Instead of being called on an Array, your function should accept as arguments all of the arrays it needs to concat.

For example

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

```

Follow-up: What would need to change in order to be able to call this function on a string?
