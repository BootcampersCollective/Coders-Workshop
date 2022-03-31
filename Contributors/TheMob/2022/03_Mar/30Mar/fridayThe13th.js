// how many Friday the 13ths will there be in a given year?

// use the Date in JS -- Date has get day,
// which returns the day (5 is Friday)
// every month check the 13th, if the day is 5 it's Friday

2022
new Date('1/13/2022').getDay();
// use a for-loop for 1 - 12 (1)

const blackFriday = (year) => {

	let count = 0;

	for (let i = 1; i < 13; i++) {
		const day = new Date(year, i, 13).getDay();
		if (day === 5) {
			count = count + 1;
		}
	}

	return count;
}

const areThereEver0FridayThe13ths = () => {

	for (let i = 2022; i < 5000; i++) {
		if (blackFriday(i) === 3) {
			return i;
		}
	}
	return 'very unlikely'
}

console.log(areThereEver0FridayThe13ths())

