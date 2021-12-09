function arrayDiff(array1, array2){
	const array2Set = new Set(array2);
	return array1.filter((elem) => array2Set.has(elem) === false)
}

console.log(arrayDiff([1, 2, 3, 4, 5], [2, 4]))

