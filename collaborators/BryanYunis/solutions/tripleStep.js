function tripleStepBruteForce(steps) {
    if (steps < 0) {
        return 0
    } else if (steps === 0) {
        return 1
    } else {
        return tripleStepBruteForce(steps - 1) + tripleStepBruteForce(steps - 2) + tripleStepBruteForce(steps - 3)
    }
}
// brute force solution is O(3^n) because each call makes three separate calls!

function tripleStepMemoize(steps) {
    let memo = []
    return tripleStepRecurse(steps, memo)
}

function tripleStepRecurse(steps, memo) {
    if (steps < 0) { // base case to handle when function is called with 0, 1, or 2 steps and thus -3, -2, -1
        return 0
    } else if (steps === 0) {
        return 1
    } else if (memo[steps]) {
        return memo[steps]
    } else { // notice we're simply assigning memo[n] to the brute force result of of the function. 
        // we save time by first checking if this value has been cached. If not, we brute force it then save it, 
        // thus not having to compute that particular value again 
        memo[steps] = tripleStepRecurse(steps - 1, memo) + tripleStepRecurse(steps - 2, memo) + tripleStepRecurse(steps - 3, memo)
        return memo[steps]
    }
}	