# Elimination Tournament

Write a function that accepts an array of values representing contestant ranks, and returns a series of arrays representing consecutive elimination rounds, simulating a tournament. The array `[2, 4, 3, 1]` would represent pairs `2, 4` and `3, 1`.

During one round, the lowest rank of a pair is eliminated while the highest pairs proceed to the next round. This goes on until one contestant only is left. If the number of contestants is odd, the last of the current array becomes the first of the next round.

At the end of the competition, return the results of all the rounds in the form of array of arrays.

For example, with input `[9, 5, 4, 7, 6, 3, 8, 2]`, your function should return the following:

```js
[
  [9, 5, 4, 7, 6, 3, 8, 2],  // first round is initial input
  [9, 7, 6, 8],              // results of 9 vs 5, 4 vs 7, 6 vs 3, and 8 vs 2 
  [9, 8],                    // results of 9 vs 7 and 6 vs 8
  [9]                        // results of 9 vs 8
]
```

With input `[9, 5, 4, 7, 6, 3, 8]`, your function should return:

```js
[
  [9, 5, 4, 7, 6, 3, 8], 
  [8, 9, 7, 6],           // 8 is now first because it was last in the former round
  [9, 7],
  [9]
]
```