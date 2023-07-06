/*
Write a function to determine whether a number is prime.
For example, input `1709` should return `true`. Input `8` should return false.

can't be divided evenly into any number smaller than it

test every number less than the square root of target number
*/

Math.sqrt(4)

function isPrime(num){
    
    for(let i = 2 ; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(1709))
console.log(isPrime(8))
console.log(isPrime(9973))
