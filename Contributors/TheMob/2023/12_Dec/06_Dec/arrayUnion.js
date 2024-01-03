
//For example, given `[1, 2, 3]` and `[3, 4]` your function should return `[1, 2, 3, 4]`.

// everything in either array (no duplicates)
// Set? 
// Use spread operator in Set
// spread back into an array


function arrayUnion(array1, array2){
    const numSet = new Set([...array1, ...array2]);
    return [...numSet]
}


console.log(arrayUnion([1,2,3],[3,4])) // [1,2,3,4]
console.log(arrayUnion([4,1,2,3],[1,10,3,4])) // [4,1,2,3,10]
console.log(arrayUnion([],[])) // []
console.log(arrayUnion([0],[])) // [0]
