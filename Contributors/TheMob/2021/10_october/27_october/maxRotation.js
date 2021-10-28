function rotate (arr) {
	const temp = arr[0]
	for (let i = 0; i < arr.length - 1; i++) {
		arr[i] = arr[i + 1]
	}
	arr[arr.length - 1] = temp
	return arr
}

function maxRotation (num) {
	const combinations = []
	const arr = num.toString().split('')

	combinations.push(arr)
	for (let i = 0; i < arr.length - 1; i++) {
		const beginning = combinations[i].slice(0, i) 
		const end = rotate(combinations[i].slice(i))
		const result = beginning.concat(end) 
		combinations.push(result)
	}
	const nums = combinations.map((element) => parseInt(element.join(''), 10)) // '123' => 123
	return Math.max(...nums)
}
 
console.assert(maxRotation(56789) === 68957)
console.log('👍')
