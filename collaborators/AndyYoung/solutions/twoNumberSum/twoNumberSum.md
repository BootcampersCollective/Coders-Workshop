# Two Number Sum

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in sorted order. If no two numbers sum up to the target sum, the function should return an empty array. Assume that there will be at most one pair of numbers summing up to the target sum.

Sample input: [3, 5, -4, 8, 11, 1, -1, 6], 10

Sample output: [-1, 11]

## Tests

```javascript
console.log("T1", twoNumberSum([4, 6], 10));       // [4, 6]
console.log("T2", twoNumberSum([6, 6, 1], 5));      // [1, 4]
console.log("T3", twoNumberSum([4, 6, 1, -3], 3));  // [-3, 6]
console.log("T4", twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)); // [-1, 11]
console.log("T5", twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17)); // [8, 9]
console.log("T6", twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18)); // [3, 15]
console.log("T7", twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5)); // [-5, 0]
console.log("T8", twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163)); // [-47, 210]
console.log("T9", twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164)); // []
console.log("T10", twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 15)); // []
```
