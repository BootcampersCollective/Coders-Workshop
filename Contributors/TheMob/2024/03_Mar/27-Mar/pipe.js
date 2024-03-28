/*
For example, assume we have an `inc` function defined as `(x) => x + 1` and `double` defined as
`(x) => x * 2`.

```js
const piped = pipe(inc, double)
piped(2) // returns 6
```
// iterate through each function
have a variable that's holding the arg
 we can get arguments passed to a function with (...args)
*/

function pipe(...fns) {

    return function (...args) {
        let value = args
        fns.forEach((fn) => {
            if (Array.isArray(value)) {
                value = fn(...value)
            } else {
                value = fn(value)
            }
        })
        return value;
    }
}

const sum = (a, b) => a + b
const double = (x) => x * 2
const piped = pipe(sum)
const piped2 = pipe(sum, double)
console.log(piped(2, 3))


let value = fns.slice(1).reduce((acc, current) => current(acc), fns[0](...args))
