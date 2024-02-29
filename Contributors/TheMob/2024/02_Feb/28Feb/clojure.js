function makeCounter () {
	let count = 1;

	return function() {
		if (count >= 2) {
			throw new Error('count is too big!')
		}
		count += 1;
		return count;
	}

}

const count = makeCounter();

console.log(count());
console.log(count());
