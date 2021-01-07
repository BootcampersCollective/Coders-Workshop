// A Collatz sequence in mathematics can be defined as follows. Starting with any positive integer `n`:
// If `n` is even, the next number in the sequence is `n / 2`
// If `n` is odd, the next number in the sequence is `(3 * n) + 1`
// It is conjectured that every such sequence eventually reaches the number `1`.
// Write a function that, given `n`, returns the number of elements in the sequence starting with `n` and ending with `1`.

// ## Bonus
// What input `n <= 1000000` gives the longest sequence?

// modulus operator: num % 2 === 0 --> num is even

// is n odd?
// 

// helper func
const nextCollatz = num => (num % 2 === 0) ? num / 2 : (3 * num) + 1;

// counter every time nextCollatz runs
// exit condition: when num === 1

const getCollatzSequenceLength = (num) => {
    let counter = 1;
    while (num !== 1) {
        num = nextCollatz(num);
        counter++;
    }
    return counter;
}

// console.log(getCollatzSequenceLength(2))
// console.log(getCollatzSequenceLength(999999))

const getMaxCollatzLength = (maxNum) => {
    let max = 0
    let num = 0
    for (let i = 1; i <= maxNum; i++) {
        const length = getCollatzSequenceLength(i)
        if (length > max) {
            max = length
            num = i
        }
    }
    return `${num} is number below ${maxNum} gives the longest sequence at ${max} elements`
}
console.log(getMaxCollatzLength(100000000))



