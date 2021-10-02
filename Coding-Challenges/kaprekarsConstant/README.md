# Kaprekar's Constant

The number 6174 is known as Kaprekar's contant, after the mathematician who discovered an associated property:
for all four-digit numbers with at least two distinct digits, repeatedly applying a simple procedure eventually results in this value. The procedure is as follows:

* For a given input `x`, create two new numbers that consist of the digits in `x` in ascending and descending order.
* Subtract the smaller number from the larger number.

Implement a function to determine how many steps it will take to reach Kaprekar's constant with a given input `n`.

For example, for input `1234`, return `3`, since:

```
4321 - 1234 = 3087
8730 - 0378 = 8352
8532 - 2358 = 6174
```

