// The input is a string `str` of digits. Cut the string into chunks (a chunk here is a substring of the initial string)
// of size `sz` (ignore the last chunk if its size is less than `sz`).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk;
// otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If
// `sz` is <= 0 or if str is empty return `""`
// `sz` is greater (>) than the length of str it is impossible to take a chunk of size sz hence return `""`.

const sumOfCubes = (str) => {
  const arr = Array.from(str)
  return arr.reduce((accumulator, digit) => accumulator + (digit ** 3), 0)
}

const rotater = (str) => {
  const append = str.substr(0, 1)
  str += append
  return str.slice(1)
}
const reverser = (str) => {
  //reverse the string
  //two pointer swap probably
  //int left/int right, unless JS has a reverse string function
  // next week :)

  return str.split("").reverse().join("")
}


const revrot = (str, size) => {
  let returnString = ""
  let startIndex = 0
  while (true) {
    if (size <= 0) break
    //instructions say not to rotate/reverse if last chunk is not exactly size
    if (startIndex >= str.length) break

    const strChunk = str.substr(startIndex, size)

    if (strChunk.length < size) break

    startIndex += size
    if (sumOfCubes(strChunk) % 2 === 0) {
      returnString += reverser(strChunk)
    } else {
      returnString += rotater(strChunk)
    }
  }
  return returnString
}
console.log(revrot("987654", 6)) // 876549
console.log(revrot("123456", 4)) // 4321
console.log(revrot("44", 8)) // ''
console.log(revrot("123456", 0)) // ''
