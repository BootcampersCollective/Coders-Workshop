
/*
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
*/

// create a function that accepts 2 arguments
// first type string, second type arr<T>
// output is an object
// loop through the list, look for the key (first parameter)
	// does key exist?
		// YES: use the value from that key, make property of new object, assign object as value
		// NO: ignore (continue)
// return object

function keyedBy(key, array){
    const obj = {}
    for(let i=0; i<array.length; i++){
        const item = array[i]
        if(key in item){
			// YES: use the value from that key, make property of new object, assign object as value
			const newKey = item[key]
            obj[newKey] = item
		}
    }
    
    return obj
}

console.log(keyedBy('id', [{name: 'Winston', age: 18, id: 11},
 {name: 'Jamuk', age: 39, id: 12},
 {name: 'Samantha', age: 21, id: 13}]))

console.log(keyedBy('id', [{name: 'Winston', age: 18, id: 11},
 {name: 'Jamuk', age: 39 },
 {name: 'Samantha', age: 21, id: 13}]))

console.log(keyedBy('id', []))
