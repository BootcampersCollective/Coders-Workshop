
//For example, given `[100, 4, 200, 1, 3, 2]`,
//the longest consecutive element sequence is `[1, 2, 3, 4]`. Return its length: `4`.
// sort array
// max = 0, count = 0
// iterate through it
	// compare current element with next element, see if it's consecutive

    // [1,2,3,7,8,100,101,102,103,104,105] // expect: 6
            3   
 function longest (arr) {
    let max = 0; //3
    let count = arr.length > 0 ? 1 : 0; //6

    arr.sort((a,b) => a-b) 

    for (let index = 0; index < arr.length - 1; index++) {
        let num1 = arr[index]
        let num2 = arr[index + 1]

        if( num1 === num2 - 1) {
            count++;
        } else {
            if (count > max) {
                max = count;
            } 
            count = 1;
        }
    }
    return max > count ? max : count;
    // return Math.max(max, count)
 }
console.log(longest([999, 1,2,100,200,])) //2
console.log(longest([100, 4, 200, 1, 3, 2])) //4
console.log(longest([1,2,3,7,8,100,101,102,103,104,105])) // 6
console.log(longest([])) // 0
// longest([{age: 10, gender: 'f', height: 152}, {age:20, gender: 'm', height: 186}])
