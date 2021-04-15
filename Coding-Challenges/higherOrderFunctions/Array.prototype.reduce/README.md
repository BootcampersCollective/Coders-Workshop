# Array.Prototype.reduce

Implement the method `Array.Prototype.reduce()` according to the [MDN spec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). The method can be run independently of the array upon which it is acting.

E.g. `reduce([1, 2, 3], (accum, curr) => curr + accum )` should return `6`.

````js
;[1, 2, 3].reduce((accum, curr) => accum + curr)
[1, 2, 3].reduce((accum, curr) => accum * curr)
[1, 2, 3].reduce((accum, curr) => accum / curr)

[1, 2, 3].reduce((accum, curr) => accum = 'yum')

```
````
