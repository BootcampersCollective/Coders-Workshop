// change it in place or create a result array


function batch(arr, len){
    let result = []
    while(arr.length !== 0){
        let holder = arr.splice(0, len)
        result.push(holder)
    }
    return result
}



console.log(batch([1, 2, 3, 4, 5, 6], 2)); // Should output [[1, 2], [3, 4], [5, 6]]
console.log(batch([1, 2, 3, 4, 5], 2)); // Should output [[1, 2], [3, 4], [5]]
console.log(batch([1, 2, 3], 5)); // Should output [[1, 2, 3]]
console.log(batch([], 3)); // Should output []
