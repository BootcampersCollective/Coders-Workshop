# groupBy

`groupBy` is a function that takes a list and a grouping function and returns an object with key/value pairs of the grouping and its respective values.

The grouping function should take a list item and return a string representing the key in the final grouping to which it belongs.

Implement groupBy.

For example, given the list `[{ name: 'winston', age: 12 }, { name: 'sarah', age: 25 }, { name: 'vlad', age: 9}]` and grouping function
`(item) => item.age < 21 ? 'underage' : 'notUnderage'`, your function should return

```
{
   underage: [{ name: 'winston', age: 12 }, { name: 'vlad', age: 9}],
   notUnderage: [{ name: 'sarah', age: 25 }],
}
```
