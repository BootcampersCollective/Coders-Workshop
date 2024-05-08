# assocIn

`assocIn` is a function that takes an array indicating a path within an object, a value to set at that path, and the object itself.
It returns a new object with the value at that path set to the provided value.

For example, with the object `const obj = { name: { first: "Winston", last: "McDermott" }, age: 28 }`, the `path` to the last name would be `['name', 'last']`.
To change the last name to 'Smith':

```js
assocIn(['name', 'last'], 'Smith', obj)
```

which should return `{ name: { first: "Winston", last: "Smith" }, age: 28 }`

If the path does not exist in the target object, it should be created: 

```js
const obj = { age: 28 }
assocIn(['name', 'last'], 'Smith', obj) // returns `{ name: { last: 'Smith' }, age: 28 }` // the `name` object was created
```

It should handle `undefined` (and `null`) gracefully:

```js
assocIn(['name', 'first'], 'Winston', null) // returns `{ name: { first: 'Winston' } }` // the entire object was created
```

An empty path should return the entire original object:

```js
assocIn([], 'Smith', { name: { first: 'Winston' } }) // returns `{ name: { first: 'Winston' } }` // the object was returned unaltered

```

Note: your function should *not* mutate the input object.
