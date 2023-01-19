# forEach (Obj)

The standard JavaScript method [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) iterates over an array and executes
a callback function for each item, passing the item into the function. For example, given the callback function `(item) => console.log(item)`, and the array 
`[1, 2, 3, 4, 5]`, we'd expect `forEach` called on this array to produce five separate console logs:

```
1
2
3
4
5
```

Implement `forEach` that iterates over objects instead of arrays. The callback function should take three arguments: `key`, `value`, `object`, corresponding to the key, value and object itself,
respectively, for the object passed.

For example, for the object `const o = {a: 1, b: 2}`, and the callback function `const cb = (key, value, object) => console.log(`${key} is ${value} in ${object}`)`, we'd expect

`forEachObj(cb, o)`

To produce 2 console logs:

```
a is 1 in {a: 1, b: 2}
b is 2 in {a: 1, b: 2}
```
