// You have `n` fair coins and you flip them all at the same time.
// Any that come up tails you set aside. The ones that come up heads you flip again.
// How many rounds do you expect to play before only one coin remains?

// Write a function that, given `n` coins, returns the number of rounds you'd expect to play until one coin remains.
// As an example, given `n = 412` coins, you should return `9`.

// think about flipping 2 coins
// 
// TT HT TH HH
// 1(1/4) + 1(1/4) + 1(1/4) + (1(1/4) + 1(1/4) + 1(1/4))(1/4) + (1(1/4) + 1(1/4) + 1(1/4))(1/4)^2 + ....
// (3/4) + (3/4)(1/4) + (3/4)(1/4)^2 + ... = (3/4)/(1-1/4) = 1


const simulateCoinFlip = () => Math.random() < 0.5 ? 1 : 0;

const simulateFlips = (n) => {

	let value = 0;

	for (let i = 0; i < n; i++) {
		value += simulateCoinFlip();
	}
	return value;
}

const numOfTimes = (n) => {
	let currNum = simulateFlips(n);
	let count = 1
	while (currNum > 1) {
		currNum = simulateFlips(currNum)
		count++
	}
	return count
}



const coinFlip = (n, count = 1) => {

	const remainingCoins = n / 2;

	if (remainingCoins <= 1) {
		return count;
	}

	return coinFlip(remainingCoins, count + 1);
}

console.log(coinFlip(3));
console.log(numOfTimes(3));
console.log(coinFlip(412));
console.log(numOfTimes(412));

