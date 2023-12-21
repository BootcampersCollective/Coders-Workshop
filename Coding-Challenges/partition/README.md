# Partition

Partition is a function that takes a predicate function and an array and returns an array of two arrays:
the first contains all items that satisfy the predicate, and the second has all elements that do not.

For example, given the array `[1, 2, 3, 4, 5, 6, 7, 8, 9]` and the predicate `(num) => num % 2 === 0`, your function should return

```
[[2, 4, 6, 8], [1, 3, 5, 7, 9]]
```

