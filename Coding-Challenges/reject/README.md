# Reject

The `reject` function is the inverse of `filter`. It accepts a predicate function and returns a list of the items that *do not* satisfy the predicate.

For example, given the predicate function `(x) => x < 4` and the list `[2, 3, 4, 5, 6]`, `reject` should return `[4, 5, 6]` (2 and 3 were rejected).

Return an empty list if no items remain after running `reject`.
