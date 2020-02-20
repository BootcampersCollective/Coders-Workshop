// find capital letter - is division of words
// make lowercase and insert an underscore

const toUnderscore = str => {
    const wordDivisionIndicies = [];

    str.split('').forEach((letter, i) => {
        if (letter.charCodeAt(0) > 65 && letter.charCodeAt(0) <91) {
            // letter is capital
            wordDivisionIndicies.push(i);
        }
    });

    wordDivisionIndicies.shift();
    wordDivisionIndicies.forEach(index => {
        str = str.split('').splice(index, 1, makeLowercase(str[index])).join('');
    });
    return str;

};

const makeLowercase = letter => {
    return String.fromCharCode(letter.charCodeAt(0) + 32);
};
console.log(toUnderscore('PascalCase'));
