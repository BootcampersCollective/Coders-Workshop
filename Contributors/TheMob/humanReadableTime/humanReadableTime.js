// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format 
// (`HH:MM:SS`)
// For example, an input of `1432` should return `00:23:52`

// modulus 60 = seconds
// / 3600 = hours
// (remainder of division by 3600) / 60 = minutes

const assert = require("assert");

const humanReadableTime = num => {
    let seconds = num % 60
    let hours = parseInt(num / 3600)
    let minutes = parseInt((num % 3600) / 60)

  
    if (seconds < 10) {
        seconds = "0" + seconds 
    } else {
        seconds + ""
    }
    if (minutes < 10) {
        minutes = "0" + minutes 
    } else {
        seconds + ""
    }
    if (hours < 10) {
        hours = "0" + hours 
    } else {
        hours + ""
    }
    
    return hours + ":" + minutes + ":" + seconds
}




assert.deepStrictEqual(humanReadableTime(1432), "00:23:52")
console.log("All tests passed!")