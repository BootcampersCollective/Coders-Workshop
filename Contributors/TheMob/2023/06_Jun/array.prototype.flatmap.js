/*
const arr1 = [1, 2, 1];

const result = flatMap(arr1, (num) => (num === 2 ? [2, 2] : 1));
Expected output: Array [1, 2, 2, 1]

const items = [1, 2, 3, 4, 5]

const func = (item) => item * 2;

map(mapper, items) // expect [2, 4, 6, 8, 10]

1. for loop
2. call mapper function
3. add value from that mapper function to array

result is expected to be `[1, 2, 2, 1]`, since the `[2, 2]` array was flattened after it was mapped into the result.
[1, [2, 2], 1]

[1, 2, 2, 1]
*/

const flatMap = (func, array) => {
	const result = [];
	for (const ele of array) {
		const val = func(ele);
        if(Array.isArray(val)){
            val.forEach(item =>{
                result.push(item)
            })
        } else {
			result.push(val);
		}
		
	}
	
	return result;
}

const double = (item) => item * 2;

const flatMapper = (num) => (num === 2 ? [2, 2] : 1)

console.log(flatMap(flatMapper, [1, 2, 1]))

const map2 = (func, array) => {
    array.forEach((item, index)  => {
        array[index] = func(item)
    })
    return array
}

const double2 = (item) => item * 2;

// console.log(map2(double2, [1, 2, 3, 4, 5]))

