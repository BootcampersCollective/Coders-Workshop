[1, 2, 3].map((x) => x * 2);

const array = [1,2,3]

function multiplyBy2(num){
    return num * 2
}

function map(callback, data) {
	if (Array.isArray(data)) {
		const results = []
		array.forEach(el => results.push(callback(el)))
		return results
	} else {
		return objectMap(callback, data);
	}
}
// Object.keys, map over values,
// listify part of the object we want to work on

console.log(map(multiplyBy2, array))

const obj = {
	a: 1,
	b: 2,
	c: 3
}
// =>
const obj2 = {
	a: 2,
	b: 4,
	c: 6
}

function objectMap(callback, object) {
	const result = {}

	const keys = Object.keys(object) // ['a', 'b', 'c']

	keys.forEach(key => result[key] = callback(object[key]))
	return result
}

console.log(map(multiplyBy2, obj));
console.log(map(multiplyBy2, array));
