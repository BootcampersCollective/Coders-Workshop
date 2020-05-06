// Create a function that takes a string and returns the string with all vowels removed.

// 'coder' => ['c', 'o', 'd', 'e', 'r']
// ['c', 'o', 'd', 'e', 'r'] => ['c', 'd', 'r']

function disemvowel(str) {
    const strArr = str.split('');
    const returnArr = [];
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // /[^aeiou]/

    strArr.forEach(char => {
        // if char is vowel, skip, otherwise push to returnArr
       if (!vowels.includes(char)) {
            returnArr.push(char);
       }
    })
    return returnArr.join('');
};

console.log(disemvowel('coder'))