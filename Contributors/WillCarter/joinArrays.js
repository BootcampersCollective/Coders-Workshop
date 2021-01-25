//Join Arrays
//Combine the three arrays into one with all headers present

const arr1 = [
  ["name", "id", "age", "weight", "Cool"],
  ["Susan", "3", "20", "120", true],
  ["John", "1", "21", "150", true],
  ["Bob", "2", "23", "90", true],
  ["Ben", "4", "20", "100", true],
]

const arr2 = [
  ["name", "id", "height"],
  ["Bob", "2", "50"],
  ["John", "1", "45"],
  ["Ben", "4", "43"],
  ["Susan", "3", "48"],
]

const arr3 = [
  ["name", "id", "siblings"],
  ["Bob", "2", "yes"],
  ["John", "1", "yes"],
]


//get headerRow with all the columns
const headerRow = [...new Set([...arr1[0], ...arr2[0], ...arr3[0]])]

const data = arr1.reduce((acc, array, i) => {
  if (i > 0) { //skip the header row

    const id = array[1]

    //get height for id
    height = arr2.reduce((acc, array) => {
      if (array[1] === id) acc = array[2]
      return acc
    }, null)
    array.push(height)//add it to array

    //get siblings for id
    siblings = arr3.reduce((acc, array) => {
      if (array[1] === id) acc = array[2]
      return acc
    }, null)
    array.push(siblings)//add it to array

    acc.push(array)

  }
  return acc
}, [])

const combined = [headerRow, ...data]
console.log(combined)