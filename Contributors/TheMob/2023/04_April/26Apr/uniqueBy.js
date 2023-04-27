/*
```
const list = [{name: 'winston', id: 1}, {name: 'sasha', id: 2}, {name: 'sally', id: 1}]
```
And the following comparison function
```
const getId = (obj) => obj.id;
```
When you run
```
uniqueBy(getId, list)
```
It should return 
```
[{name: 'winston', id: 1}, {name: 'sasha', id: 2}]

```
{'1': true, '2': true}
[1, 2, 3, 4, 5, 1]
use a set -- can check if a value is in the set
sets only take unique values
*/
/*
[1.4, 1.7, 2.2, 1.5]

const function = (num) => Math.floor(num)
*/

// for loop (for in)
	// use passed function
	// get value by calling callback
	// set (or map).has()
// create a new list

const uniqueBy = (fn, list) => {
    const output = [];
    const map = new Map();

    for(const item of list){
        const val = fn(item)

        if(!map.has(val)){
            output.push(item);
            map.set(val,1)
        }
    }
    return output
}

const getId = (obj) => obj.id;

const obj = {name: 'winston', id: 1}
const list = [obj, {name: 'sasha', id: 2}, {name: 'sally', id: 1}, obj]

console.log(uniqueBy(getId, list))
console.log(uniqueBy((num) => Math.floor(num), [1.4, 1.7, 2.2, 1.5]))
