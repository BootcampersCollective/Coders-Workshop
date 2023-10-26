/*
chainMultiply(2)(3)(); // => 6
chainMultiply(2)(3)(4)(5)(); // => 120
chainMultiply(9)(8)(7)(); // 504
chainMultiply(100)(2)(5)(10)(.01)(); // 100
*/
// chainMultiply(2)(3) => 6


const chainMultiply = (num1) => {
    if(num1 == undefined){
        return 1;
    }
	return (num2) => {
        if(num2 == undefined){
            return num1;
        }
		
        return chainMultiply(num2 * num1)
	}

}


console.log(chainMultiply()); // => 1
console.log(chainMultiply(0)()); // => 0
console.log(chainMultiply(3)()); // => 3
console.log(chainMultiply(2)()); // => 2
console.log(chainMultiply(2)(3)()); // => 6
console.log(chainMultiply(2)(3)(4)(5)()); // => 120
console.log(chainMultiply(9)(8)(7)()); // 504
console.log(chainMultiply(100)(2)(5)(10)(.01)()); // 100
