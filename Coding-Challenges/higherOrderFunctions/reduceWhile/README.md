# reduceWhile

Like reduce, `reduceWhile` returns a single item by iterating through the list, successively calling the reducer function.

`reduceWhile` also takes a predicate that is evaluated before each step.

If the predicate returns false, it "short-circuits" the iteration and returns the current value of the accumulator.

For example, given the list `[1, 2, 3, 4, 5]` and the reducer function `(a, b) => a + b`, and the predicate function `(a, b) => a < 5`

`reduceWhile(predicate, reducer, list)` should return `10` (since 1 + 2 + 3 + 4 = 10). Note that 5 is not included in iteration since it does not pass the predicate `< 5`)
