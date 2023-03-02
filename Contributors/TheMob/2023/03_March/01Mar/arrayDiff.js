//For example, given `[1, 2, 3, 4, 5]` and `[2, 4]` return `[1, 3, 5]`. Given `[1, 2, 3, 4, 5]` and `[6, 7]` return `[1, 2, 3, 4, 5]`.
// `[1, 2, 3, 4, 5]` and `[2, 4, 3]` return `[1, 3, 5]`. Given `[1, 2, 3, 4, 5]` and `[6, 7]` return `[1, 2, 3, 4, 5]`.

// walk through each item in first array, check if (indexOf or Set.has()) other array contains it, if it doesn't push into new array; return new array
// make a Set out of second array, more efficiently check if item is in 2nd
// sets are like dictionaries (objects) => constant lookup

// indexOf, contains
function arrayDiff(arr1, arr2) {
    let arrSet = new Set(arr2)
    let returnArr = []
    arr1.forEach(number =>{
        if(!arrSet.has(number)){
            returnArr.push(number)
        }
    })
    return returnArr
}

console.log(arrayDiff([1, 2, 3, 4, 5], [2, 3]))
console.log(arrayDiff([1, 2, 3, 4, 5], []))
console.log(arrayDiff([], [2, 3]))
