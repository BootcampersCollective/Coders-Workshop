/*
For example, given the predicate function `(x) => x < 4` and the list `[2, 3, 4, 5, 6]`, `reject` should return `[4, 5, 6]`
(2 and 3 were rejected since they're less than 4).

take in function given, take in list
iterate over list, use each item as an argument for this function
add the things that don't satisfy the function to a new array
return new array
*/


function reject(func, values){
    
    return values.reduce((acc, value) => {
        if(!func(value)) {
            acc.push(value)
		}
        return acc
    }, [])
}

console.log(reject(((x) => x < 4), [2, 3, 4, 5, 6]))
console.log(reject(((x) => x < 4), [])) // []
