/*
Given a positive integer N, find the smallest number of steps it will take to reach 1.

There are two kinds of permitted steps:

* You may decrement N to N - 1.
* If a * b = N, you may decrement N to the larger of a and b.

For example, given 100, you can reach 1 in five steps with the following route: `100 -> 10 -> 9 -> 3 -> 2 -> 1`.  100-10-5-4-2-1

// can we memoize this?

*/

function steps(num){
    solution = ""
    if(num == 1) {
        solution+= "1"
    }
    else if(Math.sqrt(num) == Math.round(Math.sqrt(num))){
        solution+= `${num} -> ${steps(Math.sqrt(num))}`
        
    }
    else if(Math.sqrt(num-1) == Math.round(Math.sqrt(num-1))) {
      solution+= `${num} -> ${steps(num-1)}`
    }
  //   else if(isPrime(num) ){
  //     solution+= `${num} -> ${steps(num-1)}`    
  // }
    else{
        let numberDif = Infinity
        let bestMult = num-1
        for(let i = 2; i < Math.sqrt(num); i++){
          if(num % i === 0 ){
            let temp = num / i 
            let diff = Math.abs(temp-i)
            if(diff < numberDif){
              numberDif = diff
              bestMult = temp
              if(bestMult < i){
                bestMult = i
              }
            }
          }
        }        
        solution+= `${num} -> ${steps(bestMult)}`
    }
    return solution
    }

//99---11----10-----5------2-----1
function isPrime(num) {
	for (i = 2; i < Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}
console.log(steps(1001 ))
console.log(steps(100))
console.log(steps(99))
console.log(steps(17))
console.log(steps(82))
let array = [3,24,5,6,5,7,786,8,8,9,7,9,7,65,5,6,56,4,7,58]
let container = new Set(array)
console.log(container.entries())
for(const entry of container){
    console.log(entry)
}
