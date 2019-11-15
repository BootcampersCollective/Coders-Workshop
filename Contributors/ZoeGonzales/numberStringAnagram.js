const nums = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
}
  
/* convertToInt adds numerical counterpart of number to the given array 
and decrements character count in the dictionary */
const convertToInt = (arr, vals, dict, name, char) => {
    while (dict[char] > 0) {
        arr.push(vals[name])
        for (let l = 0; l < name.length; l++) {
            dict[name[l]]--;    // decrement char in this line
        }
    }
}

const numberStringAnagram = str => {
    const letters = {}
    const arr = [...str]

    // build dictionary/object
    for (let i = 0; i < arr.length; i++) {
        if (!letters[arr[i]]) {
            letters[arr[i]] = 1;
        } else {
            letters[arr[i]]++;
        }
    }

    let numArr = [];

    // first set - characters unique to the entire list 
    for (const key in letters) {
        switch(key) {
            case 'z':
                convertToInt(numArr, nums, letters, "zero", "z")
                break;
            case 'x':
                convertToInt(numArr, nums, letters, "six", "x")
                break;
            case 'g':
                convertToInt(numArr, nums, letters, "eight", "g")
                break;
            case 'u':
                convertToInt(numArr, nums, letters, "four", "u")
                break;
            case 'w':
                convertToInt(numArr, nums, letters, "two", "w")
                break;
        }
    }

    // second set - characters unique to this set
    for (const key in letters) {
        switch(key) {
            case 'o':
                convertToInt(numArr, nums, letters, "one", "o")
                break;
            case 't':
                convertToInt(numArr, nums, letters, "three", "t")
                break;
            case 's':
                convertToInt(numArr, nums, letters, "seven", "s")
                break;
            case 'f':
                convertToInt(numArr, nums, letters, "five", "f")
                break;
        }
    }

    // Because nine has no unique characters relative to the second set, it is handled separately
    while (letters.n > 0) {
        numArr.push(nums.nine)
        letters.n-=2;
        letters.e--;
        letters.i--;
    }

    // validate result
    for (const key in letters) {
        if (letters[key] !== 0) return 'invalid input';
    }

    const sorted = numArr.sort()
    return sorted.join("")
}

console.log(numberStringAnagram('niesevehrtfeev')) // 357
console.log(numberStringAnagram('nnnineinneei')) // 999
console.log(numberStringAnagram('oneeightfoursixzerotwofour')) // 0124468
console.log(numberStringAnagram('ninee')) // invalid input