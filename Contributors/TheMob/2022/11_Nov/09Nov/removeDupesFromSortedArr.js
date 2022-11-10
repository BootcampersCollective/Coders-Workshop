// Given `[1,1,2]`, your function should return 2, since the output will have two unique numbers after removing duplicates,
// Given `[0,0,0,0,1,1,1,2,2,3,3,4]`, your function should return 5. (0, 1, 2, 3, 4 are the only unique numbers)
//             ^     ^

// Remove duplicates and return the length of deduplicated items

// "constant space", "in-place" --> no new array
// look next door to see if adjacent element is duplicate
// keep track of last place we've placed someone and the right pointer
// start left and right at 0, if same increment right pointer
// left: last place I've placed someone; right: each person I haven't placed yet



function removeDoops(arrayOfNums){
    let leftPointer = 0
    let rightPointer = 0

    while(rightPointer < arrayOfNums.length){
        if(arrayOfNums[leftPointer] !== arrayOfNums[rightPointer]){
            arrayOfNums[leftPointer+1] = arrayOfNums[rightPointer]
            leftPointer++
        }
		rightPointer++;
    }
    return leftPointer + 1
}

setTimeout(() => console.log('first'))
console.log('second')


 console.log(removeDoops([0,0,0,0,1,1,1,2,2,3,3,4]))
 console.log(anotherSolution([1, 1, 2]))

function anotherSolution (arr) {
	let counter = 0;
    let val = arr[0]
    for (let [index, x] of arr.entries()) {
        if (val.toString() !== x.toString() ? true : false) {
            counter++;
            val = x
            arr.splice(index, 1)
        }
    }

	return arr.length;
}
