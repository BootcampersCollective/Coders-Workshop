/*
Partition is a function that takes a predicate function and an array and returns an array of two arrays:
the first contains all items that satisfy the predicate, and the second has all elements that do not.

For example, given the array `[1, 2, 3, 4, 5, 6, 7, 8, 9]` and the predicate `(num) => num % 2 === 0`, your function should return

```
[[2, 4, 6, 8], [1, 3, 5, 7, 9]]
```
* create two arrays to return
* loop over the array input
* call the predicate function with each element; if it returns true, push value to first array, else push value to other array
* after loop, return array of two arrays

*/

const partition = (array, func) => {
    const trueArray = [];
    const falseArray = [];
    for (let i = 0; i < array.length; i++){
        if (Boolean(func(array[i])) === true ) {
            trueArray.push(array[i])
        } else {
            falseArray.push(array[i])
        }
    }
    return [trueArray, falseArray]
}

const isEven = (num) => num % 2 === 0
const includesA = (item) => item.includes('a')
console.log(partition([1, 2, 3, 4, 5, 6, 7, 8, 9], isEven))
console.log(partition([], isEven))
console.log(partition(['abc', '123'], includesA))
