# FilterMap

To map over specific items in an array, it can be first filtered then mapped over. However, this requires two passes over the array.

filterMap is an optimization for implementing a map on select items in an array. Implement filterMap.

For example, with array `[1, 2, 3, 4, 5]`, filter `(x) => x < 4`, and map `(x) => x * 2`, filterMap should return `[2, 4, 6]`.
