// implement take => take(2, [1, 3, 4, 5, 2]) => [1, 3]

// JS: could use slice or splice

function take(n, arr) {
	return arr.slice(0, n)
}

// curried
function takeN(n) {
	return (arr) => {
		return arr.slice(0, n)
	}
}

const take5 = takeN(5)
const take6 = takeN(6)

console.log(take5([1, 3, 4, 5, 2, 6, 2, 8]))
console.log(take5)
