# Partition

Partition is a function that takes a predicate and an array and returns an array of two arrays. 

The first returned array is all elements in the original array that satisfy the predicate, and the second is all elements that do not.

For example, given the array `[1, 2, 3, 4, 5, 6, 7, 8, 9]` and the predicate `const isEven = (num) => num % 2 === 0`, your function should return

```
[[2, 4, 6, 8], [1, 3, 5, 7, 9]]
```

