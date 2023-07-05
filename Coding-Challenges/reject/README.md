# Reject

The `reject` function is the inverse of `filter`. It accepts a predicate function and a list and returns a new list of the items that *do not* satisfy the predicate.

For example, given the predicate function `(x) => x < 4` and the list `[2, 3, 4, 5, 6]`, `reject` should return `[4, 5, 6]` (2 and 3 were rejected since they're less than 4).

Return an empty list if no items remain after running `reject`.
