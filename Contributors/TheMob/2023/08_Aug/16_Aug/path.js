/*
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
*/

function path(obj, pathArr, fallback) {
  let result = obj;
  for (let key of pathArr) {
    // if (result && result[key]) {
    if (result?.[key] || result !== undefined) {
      result = result[key];
    } else {
      result = undefined;
    }
  }

  return result === undefined ? fallback : result;
}

const obj = {
  id: 1,
  name: {
    first: 'Winston',
    last: 'McDermott',
    meta: {
      changed: false
    },
    age: 0,
  },
  favorites: ['apples', 'cucumbers']
};

const pathTest = ['name', 'age'];
const pathTest2 = ['favorites', 0];

console.log(path(obj, pathTest2, 'nope!'));
