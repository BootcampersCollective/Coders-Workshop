// For example, given
// `[8, 4, 6, 5, 2, 3, 1, 9]` return 7

// nested for-loop
// convert arr in set
// iterate from 1 to a certain arbitrary number
// sneaky: add all numbers, use formula, sum from 1 to n = (n * (n + 1)) / 2

// array.length = maximum number - 1

function findMissingNumber(arr){
    const maxNumber = arr.length + 1;
    const summation = (maxNumber * (maxNumber + 1)) / 2;
    const reduction = arr.reduce((total, currentElem) => {
        return total + currentElem;
    }, 0)
    return summation - reduction;
}

console.log(findMissingNumber([1, 2, 3, 5]))
console.log(findMissingNumber([8, 4, 6, 5, 2, 3, 1, 9]))
console.log(findMissingNumber([1, 3]))
