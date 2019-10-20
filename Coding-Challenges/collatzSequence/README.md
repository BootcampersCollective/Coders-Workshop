# Collatz Sequence

A Collatz sequence in mathematics can be defined as follows. Starting with any positive integer `n`:

If `n` is even, the next number in the sequence is `n / 2`

If `n` is odd, the next number in the sequence is `(3 * n) + 1`

It is conjectured that every such sequence eventually reaches the number `1`.

Write a function that, given `n`, returns the number of elements in the sequence starting with `n` and ending with `1`.

## Bonus

What input `n <= 1000000` gives the longest sequence?
