/*
The `take` function accepts an integer `n` and an array `arr` and returns a new array with the first `n` elements of `arr`.
For example, `take(2, [1, 2, 3, 4, 5])` should return `[1, 2]`.
Implement `take`.
Using [currying](https://en.wikipedia.org/wiki/Currying) with the `take` function, implement `takeFive`, a function that always returns the first five elements of a given input array.
*/
// 2 parameters, number, array -- loop over array from 0 to < number
// create new array, push item from loop into array
// verify number not greater than array length or less than 0 -- if greater than length, return entire array
// return new array

const take = (num) => {

    return function (arr) { // this
        if(num < 1) {
            return [];
        }
        if(num >= arr.length){
            return arr;
        }
        
        const result = [];

        for(let i=0; i < num; i++){
            result.push(arr[i])
        }

        return result;
    }
}

const takeFive = take(5) // (num) => (arr) => arr

console.log(takeFive([1, 2, 3, 4, 5, 6, 7, 8]))


take(5)([1, 2, 3, 4, 5, 6, 7])

// console.log(take(5, [1, 2, 3, 4, 5, 6, 7, 8]))
// console.log(take(0, [1, 2, 3, 4, 5, 6, 7, 8]))
// console.log(take(-1, [1, 2, 3, 4, 5, 6, 7, 8]))
// console.log(take(10, [1, 2, 3, 4, 5, 6, 7, 8]))
