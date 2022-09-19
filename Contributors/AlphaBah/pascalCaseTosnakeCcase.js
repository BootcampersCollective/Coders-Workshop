/* eslint-disable indent */
//PascalCase to snake_case
// Complete the function/method so that it takes PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If method gets number, it should return string.

// For Example: input "TestController" should return test_controller input "MoviesAndBooks" should return movies_and_books

function convertToSnakeCase(str) {
    // if no value return
    if (!str) {
        return console.log("add value")
    }

    //if get #: turn it to string
    const noNumberStr = str.toString()
    //convert to snake_case
    const snakeCase = noNumberStr.slice(0, 1).toLowerCase() +
        noNumberStr.slice(1).split("").map((el) => {
            if (el === el.toUpperCase()) return "_" + el.toLowerCase()
            else return el
        }).join("")


    return snakeCase


}