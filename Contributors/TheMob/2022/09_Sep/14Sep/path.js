const obj = {
    id: 1,
    name: {
        first: 'Winston',
        last: 'McDermott',
    },
    favorites: ['apples', 'cucumbers']
}

/*()
```

and the following path

```
['name', 'first']
```

Your function should return `Winston`.
*/

// pop off first elements of array, use them to reference parts of object
// continue until array is empty

// could use bracket-notation

const path = (paths, obj) => {
	// iterate through

	for (let p of paths) {
		if (!obj[p]) {
			return undefined;
		} else {
			obj = obj[p];
		}
	}
	return obj;
}

console.log(path(['name', 'first'], obj));
