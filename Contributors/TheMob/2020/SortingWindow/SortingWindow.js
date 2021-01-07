// Given an array of integers out of order, determine the bounds of the smallest window that must be sorted 
// in order for the entire array to be sorted. 
// For example, given [3, 7, 5, 6, 9, 8], you should return (1, 3).

const sortingWindow = arr => {

    let startIndex = 0
    let endIndex = 0
    let  i =0;
    let j = arr.length-1;

    while ( i < j && j > i) {
        if(arr[i] < arr[i+1]){
            i++;
        }
        else if (arr[i] > arr[i+1] ){
            startIndex = i;
        }
        if (arr[j] < arr[j-1]) {
            j--
        }

    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            // these two items are sorted
        }
        if (arr[i] > arr[i + 1]) {
            // these two items are not sorted
            startIndex = i
            while (arr[startIndex] > arr[i+1]) {
                i++
            }
            endIndex = i
        }
    }
    for (let i = arr.length -1; i >= 0; i--) {
        if (arr[i] < arr[i - 1]) {
            endIndex = i
        }
    }
    return [startIndex, endIndex]
}

console.log(sortingWindow([3, 7, 5, 6, 9]))