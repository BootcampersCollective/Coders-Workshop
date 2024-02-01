# Pipe

Pipe is a function that accepts one or more functions and returns a function that "pipes" the output
of each supplied function to the next, moving in a left-to-right order.

For example, assume we have an `inc` function defined as `(x) => x + 1` and `double` defined as
`(x) => x * 2`.

```js
const piped = pipe(inc, double)
piped(2) // returns 6
```

The function returns 6 because the input, `2` was piped through `inc` (3) then `double` (6).

`pipe` should handle edge cases sensibly.

Tip: the first function passed to `pipe` can accept any number of arguments;
the remaining functions must only accept one argument.
