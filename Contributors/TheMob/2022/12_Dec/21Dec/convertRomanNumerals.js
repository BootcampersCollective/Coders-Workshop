/*
```json
```
In addition, note that the Roman numeral system uses subtractive notation for numbers such as IV and XL.
For the input `"XIV"`, for instance, you should return `14`.
More examples

Input: s = "III"
Output: 3

Input: s = "LVIII"
Output: 58

Input: s = "MCMXCIV"
Output: 1994

"LVIII"
* while loop to iterate
* identify what "I" (each character) is
* look at next character; if it's bigger than current value (IV), subtract; otherwise (II, VI) add it

*/

const romans = {
  "M": 1000,
  "D": 500,
  "C": 100,
  "L": 50,
  "X": 10,
  "V": 5,
  "I": 1
}

function convertRomans(str) {
	let total = 0
	let i = 0;
	if (str.length === 0) {
		return total 
	}

	while (i < str.length - 1) {
		const curr = romans[str[i]]; // 1
		const next = romans[str[i + 1]]; // 1
		if (curr < next) {
			total -= curr;
		} else {
			total += curr;
		}
		i += 1;
	}
	total += romans[str[str.length - 1]];

	return total;
}

console.log(convertRomans("LVIII")); // 58
console.log(convertRomans("III")); // 58
console.log(convertRomans("I")); // 58
console.log(convertRomans("MCMXCIV")); // 1994
console.log(convertRomans("IIV")); // 
console.log(convertRomans("nonsense")); 
