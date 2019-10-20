# Clockwise Spiral

Given an *N* by *M* matrix, return (or print) the result of traversing the array in a clockwise spiral from *(0, 0)*.

For example, given the following matrix:

```js
[[ 1,  2,  3,  4,  5],
 [ 6,  7,  8,  9, 10],
 [11, 12, 13, 14, 15],
 [16, 17, 18, 19, 20]]
```

You should return the following:

```js
[1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]
```

## Bonus

Implement the above challenge by creating a class with the following methods:

* `next()`: returns the next element in the clockwise spiral
* `has_next()`: returns a boolean indicating whether there are further elements to display in the multidimensional array
