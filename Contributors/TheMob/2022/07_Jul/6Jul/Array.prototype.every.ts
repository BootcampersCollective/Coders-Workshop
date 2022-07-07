
function every(array: number[], fn: Function): Boolean {
    for (let i = 0; i < array.length; i++) {
        const result: Boolean = fn(array[i])
        if(!result){
            return false;
        } 
    }
    return true;
}


console.log(every([1, 2, 3], (val) => val < 4)) // true
console.log(every([1, 2, 3], (val) => val > 5)) // false
console.log(every([3, 67, 11], (val) => val === 2)) // false

console.log(every([], (val) => val === 2)) // false 
