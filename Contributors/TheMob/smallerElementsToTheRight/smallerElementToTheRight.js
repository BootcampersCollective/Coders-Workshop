// Given an array of integers, return a new array where each element in the new array is the number of smaller elements to the 
// right of that element in the original input array.
// For example, given the array `[3, 4, 9, 6, 1]`, return `[1, 1, 2, 1, 0]`, since:


const smallerToTheRight = arr => {
    
    // map over input array:
        // arr[i] => how many elements to the right are smaller than arr[i]
            // iterate through the rest of the elements and ask ^
        // map

    /**
     * return arr.map((ele, i) => {
     *  let everythingToTheRight = arr.slice(i);
     *  let countLowerThan = everythingToTheRight.filter(compareEle => compareEle < ele).length;
     *  return countLowerThan;
     * })
     */

    // sort a copy of the array
    // iterate through the sorted array, find index of original element
    
    // find index
        // return arr.map((element, i) => {
    //     // how many elements to the right are smaller than I am
    //   return
    // })

let FinalArray = [];

for(let i = 0; i < arr.length; i++) {
  var counter = 0;
  for (let j = i; j < arr.length; j++) {
    if (arr[j] < arr[i]) {
        counter++
    }
  }
  FinalArray.push(counter)
}
return FinalArray
}




function arrayEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function main() {
  let input = [3, 4, 9, 6, 1];
  let expected = [1, 1, 2, 1, 0];
  let actual = smallerToTheRight(input);
  console.log(`Expected: ${expected}; Actual: ${actual}`);
  return arrayEquals(expected, actual); // should be true if it passes
}

console.log(main());