/*
Given an integer n and a list of integers l, write a function that randomly generates a number from 0 to n-1 that isn't in l (uniform).
*/
// random(30, [1, 6, 3, 2]) 
// Math.floor(Math.random() * n);

// generate random number, if in list, do again -- can use do while

const random = (n, array) => {
    const set = new Set(array.filter(num => num >= 0 && num < n))
    if(set.size === n){
        return null;
    }

    let num =  Math.floor(Math.random() * n);
    let maxTries = 1000;

    while(set.has(num) && maxTries > 0){
        num =  Math.floor(Math.random() * n);
        maxTries--;
    }

    return num;
}


console.log(random(5, [1, 2, 3])) // 0 or 4
console.log(random(5, [0, 1, 2, 3, 4])) // null
console.log(random(5, [0, 22, 2, 10, 4, 27]))  // 1, 3
console.log(random(5, [0, 22, 2, 10, 4, 27, -1, -10]))  // 1, 3
