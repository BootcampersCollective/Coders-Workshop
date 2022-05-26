// Write a function that accepts a string of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// For example, with input `1234567890` your function should return `"(123) 456-7890"`
// "1234567890" -> (123) 456-7890

// replace all the spaces with nothing
// use template literal to format number

const formatPhone = (string) => {
	// replace all the spaces with nothing
	string = string.replace(/\D/g, '');
	if (string.length !== 10) {
		throw new Error('Give me 10 digits, please!');
	}
	return `(${string.slice(0, 3)}) ${string.slice(3, 6)} - ${string.slice(6)} `;
}

console.log(formatPhone('82 6538 kj 9937'));
console.log(formatPhone('85 !  19231838 '));
