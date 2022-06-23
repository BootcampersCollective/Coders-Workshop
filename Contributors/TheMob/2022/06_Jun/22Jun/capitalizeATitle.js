
// For example, an input `"war and peace"` should return `"War and Peace"` and `"the old man and the sea"` should return `"The Old Man and the Sea"`.
// The first word should begin with an uppercase, and each subsequent word should begin with an uppercase except the words `the`, `and`, `of`, and `for`.


// except the words `the`, `and`, `of`, and `for`.


// split the string at spaces
// loop through the array, split each word into chars, splice/replace the first char with the capitalized version (toUppercase())
// string.replace could potentially be used

//"wow".replace(, "W")

const capitalizeTitle = (title) => {
    const ignore = new Set(["the", 'and', 'of', 'for']);
    let words = title.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (!ignore.has(words[i])) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    }
    return words.join(" ")
}
//words[i] = words[i].replace(charAt(0), charAt(0).toUpperCase())
console.log(capitalizeTitle('war and peace the best'))
