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
*/


const keyedBy = (key, arr) => arr.reduce((acc, obj) => {
	acc[obj[key]] = obj
	return acc
}, {})



const l = [{name: 'Winston', age: 18, id: 11},
 {name: 'Jamuk', age: 39, id: 12},
 {name: 'Samantha', age: 21, id: 13}]

console.log(keyedBy('id', l))


// don't mind this, a little async await
const sleep = (ms) => {
    return new Promise((resolve, reject) => {
        reject('oh no!')
        setTimeout(resolve, ms)
    })
}

console.log('about to wait for 5 seconds')
try {
    await sleep(5000)
    console.log('i\'m done waiting')

} catch(err) {
    console.error(err)
}
console.log('after it all')
