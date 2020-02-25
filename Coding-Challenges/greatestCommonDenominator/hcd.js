const getRand = function(x = 100) {
    //Returns random int between 1 and x
    return Math.trunc(Math.random() * x) + 1
};

const test_gcd_func = (func) => {
    let answer = getRand(25)
    let data_length = getRand(15)
    const data = []
    for(let i = 0; i < data_length; i++){
        data.push(answer * getRand())
    }

    return func(data) === answer
}

const get_highest_common_denom = (data) => {
    //Should return Number equal to highest common denominator
}

console.log("Test Passed: " + test_gcd_func(Math.abs))