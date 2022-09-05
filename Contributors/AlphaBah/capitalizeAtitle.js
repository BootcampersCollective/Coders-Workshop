/* eslint-disable indent */

// Capitalize a Title
// Write a function that takes a string and properly capitalizes it as if it were the title of a work of art.

// The first word should begin with an uppercase, and each subsequent word should begin with an uppercase except the words the, and, of, and for.

// For example, an input "war and peace" should return "War and Peace" and "the old man and the sea" should return "The Old Man and the Sea".

//     Follow - up: Don't use any built-in capitalization functions (e.g. toUpperCase()).

const capitalizeATitle = str => {
    // just incase any character is uppercase convert it to a lowercase
    str.toLocaleLowerCase()
    let letters = str.toLocaleLowerCase()

    let upercasedCharacter = letters.split(" ").map((up) => {
        let uppercasedRemoveOldStr = up.charAt(0).toUpperCase() + up.slice(1)

        let result = uppercasedRemoveOldStr
        let char = uppercasedRemoveOldStr

        if (char.includes("Of")) {
            result = char.replace("Of", "of").slice("Of")
        } else if (char.includes("And")) {
            result = char.replace("And", "and").slice("And")
        } else if (char.includes("For")) {
            result = char.replace("For", "for").slice("For")
        } else if (char.includes("The")) {
            result = char.replace("The", "the").slice("The")
        }

        return result

    })
    return upercasedCharacter.join(" ")
}
