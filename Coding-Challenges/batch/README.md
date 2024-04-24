# Batch

`batch` takes an array and a number and divides an array into multiple sub-arrays. Each sub-array should have a length equal to the specified number.

The final sub-array may have fewer than the specified number of elements if there aren't enough elements left to fill it.

Implement `batch`.


```js
batch([1, 2, 3, 4, 5, 6], 2); // Should output [[1, 2], [3, 4], [5, 6]]
batch([1, 2, 3, 4, 5], 2); // Should output [[1, 2], [3, 4], [5]]
batch([1, 2, 3], 5); // Should output [[1, 2, 3]]
batch([], 3); // Should output []

```

