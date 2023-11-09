# keyedBy

keyedBy is a function that creates an object from an array of objects, keyed by a particular key present in the objects.

For example, given the list `l`

```
[{name: 'Winston', age: 18, id: 11},
 {name: 'Jamuk', age: 39, id: 12},
 {name: 'Samantha', age: 21, id: 13}]
```

`keyedBy('id', l)` should return

```
{
    11: {name: 'Winston', age: 18, id: 11},
    12: {name: 'Jamuk', age: 39, id: 12},
    13: {name: 'Samantha', age: 21, id: 13}
}
```

In-effect, keyedBy creates an index on a particular key in a list.

If the `key` is not present in an object, do not include it in the result.

Given an empty list, return an empty object.


