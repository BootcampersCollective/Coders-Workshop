// reimplement map()
// take a number as an input, multiply every digit by 2
// need an array 
// [1, 2, 3, 4] => double/triple => [2, 4, 6, 8]
// get each value of the array, do something to each value
// iterate (for-loop)

function reimplementMap (arr, fn) {
    const arr1 = [];

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index]
		const newElement = fn(element)
        arr1.push(newElement)
    }

    return arr1;
}

const double = (x) => x * 2;
const arr = [1, 2, 3, 4, 5]
//console.log(reimplementMap(arr, double))
//console.log(reimplementMap([], double))

// take a number as an input, multiply third digit by 2
function doubleNum(num){
    const convertStr = num.toString().split(''); // ['1', '2', '3', '4']
    convertStr[2] *= 2
    return convertStr.join('');
}

console.log(doubleNum(1234))
console.log(doubleNum(246))
console.log(doubleNum(0))
