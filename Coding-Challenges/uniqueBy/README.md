# UniqueBy

UniqueBy is a function that takes a list and a comparison function, and returns a new list with duplicate values removed.

If duplicate values are encountered, the value that occurs earliest in the list should be kept.

The comparison function accepts a value in the list and returns the value to be compared. For instance, this could be a property on an object.

For example, given the following list

```
const list = [{name: 'winston', id: 1}, {name: 'sasha', id: 2}, {name: 'sally', id: 1}]
```

And the following comparison function

const getId = (obj) => obj.id;

```
uniqueBy(getId, list)
```

Should return 

```
[{name: 'winston', id: 1}, {name: 'sasha', id: 2}]

```
