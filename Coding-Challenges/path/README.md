# Path

Write a function that takes an array and an object; the array represents a path to access a property on the provided object. The function should return the value of that property.

For example, with the following object
```
{
    id: 1,
    name: {
        first: 'Winston',
        last: 'McDermott',
        meta: {
            changed: false
        }
    },
    favorites: ['apples', 'cucumbers']
}
```

and the following path

```
['name', 'first']
```

Your function should return `Winston`.

The path

```
['name', 'meta', 'changed']
```
should return `false`


The same object with path

```
['favorites', 0]
```

should return `'apples'`

If the path does not exist, return `undefined`.

