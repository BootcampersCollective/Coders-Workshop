// Write a program that checks whether an integer is a palindrome. 
// For example, 121 is a palindrome, as well as 888. 678 is not a palindrome.

// Follow up: Do not convert the integer into a string.

// WITH STRING CONVERSION

const isPalindrome = int => {
    const stringInt = int.toString()
    const reversedIntString = reverseString(stringInt)

    return reversedIntString == stringInt
}

const reverseString = string => {
    const splitString = string.split('')
    const reversedString = splitString.reverse()
    return reversedString.join('')
}

// WITHOUT STRING CONVERSION


const isPalindromeNoString = int => {
    const lastNumber = int % 10
    if (lastNumber === int) {
        return true
    }

    const resultsArr = []
    let keepGoing = true
    

    while (keepGoing) {
        // take int % 10
        const num = int % 10
        // divide by 10, convert to int, save into an array
        int = Math.floor(int / 10)
        if (int === 0) {
            // keep going until converting to int results in zero
            keepGoing = false
        }
            resultsArr.push(num)
    }

    const reversedArr = resultsArr.slice(0, resultsArr.length).reverse()

    for (let i = 0; i < resultsArr.length; i++) {
        if (resultsArr[i] !== reversedArr[i]) {
            return false
        }
    }
    return true
}
