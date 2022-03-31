
// Given `n`, take the sum of the digits of `n`. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// For example:

// 16  -->  1 + 6 = 7
// "942"  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// take a common denominator
// use remainder operator (modulus operator) to get last digit e.g. 16 % 10 -> 6; repeat until we have a single digit
// we would have to do all the powers of 10... might be easier to cast it as a string, split to list, parse as integer, and sum

const digitalRoot = (n) => {
	if (n < 10) {
		return n;
	}

	const numString = String(n);
	const numStrArr = numString.split('');
	let sum = numStrArr.reduce((total, currVal) => {
		return total + parseInt(currVal);
	}, 0)
	
	while (sum > 9) {
		sum = digitalRoot(sum);
	}

	return sum;
}

console.log(digitalRoot(132189)) // 6
console.log(digitalRoot(16)) // 6

