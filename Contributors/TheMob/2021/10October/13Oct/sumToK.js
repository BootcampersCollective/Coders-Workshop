// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given `[10, 15, 3, 7]` and `k` of 17, return `true` since 10 + 7 is 17.

// take first item, check every other item, see if the sum is equal to k
	// if sum === k; return true
// at end, return false

// put the number we're looking at in a hash map
// see if k - list[i] is in hash map

const sumsToK = (list, k) => {
	// take first item, check every other item, see if the sum is equal to k
	for (let i = 0; i < list.length; i++) {
		for (let j = i + 1; j < list.length; j++) {
			if (list[i] + list[j] === k) {
				return true
			}
		}
	}
	return false
}
const sumsToKOnePass = (list, k) => {
	const hashMap = {}

	for (let i = 0; i < list.length; i++) {
		const targetValue = k - list[i]
		if (hashMap[targetValue]) {
			return true
		} else {
			hashMap[targetValue] = list[i]
		}
	}
	return false
}

console.log(sumsToK([10, 15, 3, 7], 19))
