# Intersecting Lines

Suppose you are given two lists of `n` points, one list `p1, p2, ..., pn` on the line `y = 0` and the other list `q1, q2, ..., qn` on the line `y = 1`. Imagine a set of `n` line segments connecting each point `pi` to `qi`. Write an algorithm to determine how many pairs of the line segments intersect.

For example, `[1, 2, 3], [2, 1, 3]` should return `1`; `[1, 2, 3], [1, 2, 3]` should return `0` because all the lines are straight up and down.
