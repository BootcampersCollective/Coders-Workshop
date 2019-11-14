//take in array
//create newarray
//loop through array
//if array[i] equals i, push into new array
//return new array if not empty, else return false


function fixedPoint(array) {
    let newarray = []
    for(let i = 0; i < array.length; i++) {
        if (array[i] === i) {newarray.push(array[i])}
    }
    newarray.length !== 0 ? console.log(newarray) : console.log('False')
}



let array1 = [-6, 0, 2, 40]
let array2 = [0, 1, 2, 3]
let array3 = [1, 2, 3]
let array4 = []
let array5 = [1, 5, 7, 8]

fixedPoint(array1)
fixedPoint(array2)
fixedPoint(array3)
fixedPoint(array4)
fixedPoint(array5)