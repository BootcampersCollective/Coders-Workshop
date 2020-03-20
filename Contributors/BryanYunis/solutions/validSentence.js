const validSentence = string => {
    // ensure the sentence starts with a capital letter
    if (!startsWithCaps(string)) {
        return false;
    }
    // ensure there no uppercase letters or other invalid characters in the rest of the string
    const remaining = string.slice(1, string.length);

    if (remaining.replace(/[a-z.?!,;: ]/g, '') !== '') {
        return false;
    }

    // ensure there are no double spaces
    const strArr = string.split(' ');
    if (strArr.includes('')) {
        return false;
    }

    const terminalChars = ['?', '.', '!']
    // ensure last character is a terminal character
    if (!terminalChars.includes(string[string.length -1])) {
        return false
    }
    // ensure character preceding terminal character is a word character
    if (!string[string.length -2 ].match(/[a-z]/)) {
        return false
    }
    return string
}

const startsWithCaps = string => {
    return string[0] === string[0].toUpperCase();
}

console.log(validSentence('Hello, world.'));