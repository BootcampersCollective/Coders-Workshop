
// for loop, walk the array in reverse, store into temporary variable
// for loop, set iteration variable to length of array, subtract one each loop
// swap?
// go halfway through and swap places
function reverse(arr) {
    var temp_array = [];
    for(i = arr.length -1; i >= 0; i--){
        temp_array.push(arr[i])
    }
	return temp_array
}

function reverse2(arr) {
	let start = 0
	let end = arr.length - 1
	while (end - start > 0) {
		const tmp = arr[start]
        arr[start] = arr[end]
        arr[end] = tmp
        start++
        end--
	}
    return arr
}

console.log(reverse([1, 2, 3, 4, 5]))
console.log(reverse("CodersWorkshop"))
