const arr1 = [
  ["name", "id", "age", "weight", "Cool"],
  ["Susan", "3", "20", "120", true],
  ["John", "1", "21", "150", true],
  ["Bob", "2", "23", "90", true],
  ["Ben", "4", "20", "100", true]
]

const arr2 = [
  ["name", "id", "height"],
  ["Bob", "2", "50"],
  ["John", "1", "45"],
  ["Ben", "4", "43"],
  ["Susan", "3", "48"]
]

const arr3 = [
  ["name", "id", "siblings", "marital status"],
  ["Bob", "2", "yes", "single"],
  ["John", "1", "yes", "married"]
]

const getById = (id, arr) => {
    if (typeof id === 'number') {
        id = id + ''
    }
    const idColIdx = arr[0].findIndex((headerItem) => headerItem === "id") // index of id column
    return arr.find((row) => row[idColIdx] === id)
}

const join = (arr1, arr2) => {
    // anything that exists in arr2 that doesn't in arr1
    const arr1Headers = arr1[0]
    const arr2Headers = arr2[0]
    const colsToAdd = arr2Headers.filter((headerItem) => !arr1Headers.includes(headerItem) ) // list of column names to be joined
    const idColIdx = arr2Headers.findIndex((headerItem) => headerItem === "id") // index of id column
    arr2.forEach((row) => {



    })

}
console.log(getById(2, arr3))


