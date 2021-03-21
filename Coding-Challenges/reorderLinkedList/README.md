# Reorder Linked List

Assume you are dealing with a data type that has the following shape:

```js
{
    id: Number,
    data: String,
}
```

Create a linked list to organize this data. The list needs three methods: `add`, `remove`, and `reorder`. Add and remove are utilities to be able to work with your list and their implementation is not important.

Reorder takes two arguments, an id and a direction. The id corresponds to the id of the list item, and the direction will be either `'up'` or `'down'`, indicating whether the item should be moved one place towards the head of the list (`up`), or once place towards the tail (`down`). This method should return a new linked list with the correct updated order.

If reorder is called with the head of the linked list and the direction `up`, no change should occur and the same list should be returned. Likewise, if reorder is called with the tail and direction `down`, the same list should be returned.

Examples: Assume our list starts with the following three items:

```js
[{id: 1, data: 'data1'}, {id: 2, data: 'data2'}, {id: 3, data: 'data3'}]
```

* `reorder(2, 'up')` should return

```js
[{id: 2, data: 'data2'}, {id: 1, data: 'data1'}, {id: 3, data: 'data3'}]
```

* `reorder(2, 'down')` on the original list should return

```js
[{id: 1, data: 'data1'}, {id: 3, data: 'data3'}, {id: 2, data: 'data2'}]
```

Note that reordering 3 `up` and 2 `down` in the original list have the same outcome.

Calling `reorder` with an invalid id or a direction other than `'up'` or `'down'` should return null; calling it on a list with zero or one items should return the same list.
