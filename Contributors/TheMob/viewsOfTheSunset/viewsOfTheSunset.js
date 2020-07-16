// You are given an array representing the heights of neighboring buildings on a city street, from east to west. 
// The city assessor would like you to write an algorithm that returns how many of these buildings have a view of the setting sun, in order to properly value the street.
// A building has no view if some building to its west is at least its same height.

// For example, given the array `[3, 7, 8, 3, 6, 1]`, you should return `3`, since the top floors of the buildings with heights 8, 6, and 1 all have an unobstructed view to the west.

// Idea: Find the max in the array, add it to the list, then find the max for the subarray after the max recursively.
// The resulting list should have all the buildings with views.

// find the max
// is value at i greater than value of i + 1, through the rest of the array to the right

const assert = require('assert')

const viewsOfTheSunset = arr => {
    let totalViewsCounter = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] >= arr[i]) {
                break
            }
            if (j === arr.length - 1) {
                totalViewsCounter++
            }
        }
    }
    return totalViewsCounter
}

/*
  [n,n-1,n-2,...] should require n^2 operations. Must find max n times, finding max is linear.
*/
const viewsOfTheSunset2 = arr => {

    const recurse = (arr, counter) => {
        if (arr.length === 1) {
            return totalViewsCounter
        }
        const maxIndex = arr.lastIndexOf(Math.max(...arr))
        return recurse(arr.slice(maxIndex), counter++)
    }
    return recurse(arr, 0)
}

function HasAView(array) {
    let totalViews = 0;
    for(let i=0;i<array.length;i+=1) {
      let isBlocked = false;
      for(let j=i+1;j<array.length;j+=1) {
        if(array[i]<=array[j] && isBlocked === false) {
          isBlocked = true;
        }
      }
      if (isBlocked === false) {totalViews+=1}
    }
    return totalViews;
  }



assert.deepStrictEqual(viewsOfTheSunset([3, 7, 8, 3, 6, 1]), 3);
assert.deepStrictEqual(viewsOfTheSunset2([3, 7, 8, 3, 6, 1]), 3);
assert.deepStrictEqual(viewsOfTheSunset2([8, 7, 6, 5, 4, 1, 8]), 1);

console.log("All tests passed!")

