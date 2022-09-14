// For example, suppose we are given the string `daily`. The best we can create in this case is `ailyd`.

// split the string into an array
// item at index of 0, move it to the end
// repeat last step many times to generate words
// find the word that comes earliest alphabetically

function rotate(string: string): string {
	// split the string into an array
	const arr: string[] = string.split('');

	// item at index of 0, move it to the end
    const deletedItem: string[] = arr.splice(0, 1);

    arr.push(deletedItem[0]); // ['a', 'i', 'l', 'y', 'd']
	return arr.join(''); // 'ailyd'
}


function rotateToSmallestString(string: string): string {
	// rotate times: length of string - 1

	const rotations: string[] = [string];
	let lastRotatedString: string = string;

	for (let i = 0; i < string.length - 1; i++) {
		const rotated = rotate(lastRotatedString);
		lastRotatedString: string = rotated;
		rotations.push(rotated);
	}
	const sorted: string[] = rotations.sort();

	return sorted[0];
}

console.log(rotateToSmallestString('daily'))
console.log(rotateToSmallestString('lexicographically'))


