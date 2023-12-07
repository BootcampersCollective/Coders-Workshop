//For example, [2, 0, 1, 0] returns True while [1, 1, 0, 1] returns False.

// create a function that accepts an array of numbers
// returns a Boolean
// iterate through array
// current value, current index, last index = array.length - 1
// while: while curIndex <= lastIndex || curVal === 0
//  curVal = value, add curVal to index, which will take us to next index
//  check if curIndex === lastIndex, return true if true
	// repeat until we get to last

// return false

function hopThrough(array){
    if(array.length === 1){
        return true
    }
    
    let curVal = array[0]
    let curIndex = 0
    const lastIndex = array.length - 1 
    while(curIndex < lastIndex && curVal !== 0){
        curIndex = curIndex + curVal
        curVal = array[curIndex]
		//  check if curIndex === lastIndex, return true if true
        if( curIndex === lastIndex ) {
            return true
        }
    } 
    return false
} 

console.log(hopThrough([2, 0, 1, 0])) // true
console.log(hopThrough([1, 1, 0, 1])) // false
console.log(hopThrough([1])) // true
console.log(hopThrough([0, 0, 0, 0])) // false
