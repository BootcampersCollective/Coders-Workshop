// For example, 5 factorial (often denoted `5!`) would be `5 * 4 * 3 * 2 * 1 = 120`.
// => factorial(num) { num * factorial(num - 1) }

// E.g. With an input `6` your function should return `720`.

function factorial (num) {
	// base case
	if (num < 0) {
		throw new Error('Can\'t have negative numbers!');
	}

	if (num === 0 || num == 1) {
		return 1;
	}
	return num * factorial(num - 1)
}

function factorialALaIan (num, result = 1) {
	// base case
	if (num === 0 || num == 1) {
		return result;
	}
	result = num * result;
	return factorialALaIan(num - 1, result);
}

const oneLinerFactorial = (num) => (num === 0 || num == 1)
	? 1
	: num * oneLinerFactorial(num - 1);

function factorialMemoized (num, cache = {}) {
	if (num < 0) {
		throw new Error('Can\'t have negative numbers!');
	}

	if (cache[num]) {
		return cache[num]
	}

	if (num === 0 || num == 1) {
		return 1;
	}
	cache[num] = num * factorialMemoized(num - 1, cache);

	return cache[num];
}


// memoized
function factorial(){
    const cache = {}

    return function(...args){
		if (num < 0) {
			throw new Error('Can\'t have negative numbers!');
		}

		if (cache[num]) {
			return cache[num]
		}

		if (num === 0 || num == 1) {
			return 1;
		}
		cache[num] = num * factorialMemoized(num - 1, cache);

		return cache[num];

    }
}
