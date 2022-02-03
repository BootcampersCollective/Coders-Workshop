const winner = (initialArr, result = [initialArr]) => {
	const nextRound = []
    let i =0;

	if (initialArr.length === 1) {
		return result
	}

    while (i < initialArr.length) {
		if (initialArr[i + 1] === undefined) {
			nextRound.shift(initialArr[i])
		}
		if (initialArr[i] < initialArr[i + 1]) {
		nextRound.push(initialArr[i + 1])
		} 
		else nextRound.push(initialArr[i])
		i += 2;
	 }
	result.push(nextRound)

    return winner(nextRound, result)
}

console.log(winner([9, 5, 4, 7, 6, 3, 8, 2]))

// hilary's solution
function bigger(num1, num2) {
	return (num1 >= num2) ? num1 : num2;
}

function oneRound(array) {
	let result = [];
	for (let i = 0; i < array.length - 1; i += 2) {
		const winner = bigger(array[i], array[i + 1])
		result.push(winner);
	}
	if (array.length % 2 === 1) {
		const leftOver = array.pop();
		result.splice(0, 0, leftOver);
	}
	return result;
}

function allRounds(array) {
	let results = [array];
	while (array.length > 1) {
		array = oneRound(array);
		results.push(array);
	}
	return results;
}

array = [9, 5, 4, 7, 6, 3, 8, 2]
console.log(allRounds(array))
