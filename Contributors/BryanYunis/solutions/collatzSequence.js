function countCollatz(num) {
    let count = 0
    collatz(num)

    function collatz(num) {
        if (num <= 0) {
            return true
        }
        if (num === 1) {
            count++
            return true 
        }
        if (num % 2 === 0) {
            count++
            return collatz(num / 2)
        }
        else {
            count++
            return collatz((3 * num) + 1)
        } 
    }
    return count
}
console.log(countCollatz(1))
console.log(countCollatz(18382))
console.log(countCollatz(18383))
// statement is true for 1; statement is true for k=18382; statement is true for
// k + 1; statement is true for all n by mathematical induction

function bonus() {
    let largest = 0
    let largestNum = 0
    for (let i = 0; i <= 1000000; i++) {
        const result = countCollatz(i)
        if (result > largest) {
            largest = result
            largestNum = i
        }
    }
    return `Input ${largestNum} gives the longest sequence of ${largest}`
}
console.log(bonus()) // 525