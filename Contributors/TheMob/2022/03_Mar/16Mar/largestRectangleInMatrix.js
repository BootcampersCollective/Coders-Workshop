// !!not yet done!! :)

// Given an N by M matrix consisting only of 1's and 0's, find the largest rectangle containing only 1's and return its area.

// For example, given the following matrix:

// ```js
// [
//   [1, 0, 1, 0],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [1, 1, 1, 0]
// ]
// [[1, 0, 0, 0], [1, 0, 1, 1], [1, 0, 1, 1], [0, 1, 0, 0]]
// ```

// Return 4.
// each element = matrix[y][x] matrix[row][col]
// conditions for rectangle: each element[row-n][column-m] through each element[row-p][column-q] are === 1 
// try to determine the corners of the rectangle

function largestRectangleMediator (arr) {
	let total = 0;
	for (let row = 0; row < arr.length; row++) {
		for (let col = 0; col < arr[0].length; col++) {
			total = Math.max(total, largestRectangle(arr, row, col))
		}
	}
	return total
}

function largestRectangle(arr, row = 0, col = 0, sum = 0){
	let total = 0;
	if (row >= arr.length) {
		return sum;
	}

  if (arr[row][col] === 1){
    sum++
    if (col < arr[row].length){
		col++
		total += largestRectangle(arr, row, col, sum)
	} else {
		return sum;
    }
    if (row < arr.length){
		row++
		total += largestRectangle(arr, row, col, sum)
	} else{
      return sum;
    }
	return total;
  }
  return 0;
}

console.log(largestRectangleMediator([[1, 0, 0, 0], [1, 0, 1, 1], [1, 0, 1, 1], [1, 1, 1, 0]]))
