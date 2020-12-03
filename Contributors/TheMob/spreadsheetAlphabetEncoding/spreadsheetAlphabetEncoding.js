// # Spreadsheet Alphabet Encoding

// Spreadsheets often use this alphabetical encoding for its columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....

// Given a column number, return its alphabetical column id. For example, given 1, return "A". Given 27, return "AA".

// need to use the alphabet
// if num < 26 => return one letter

// 1 => 2 , 3 , 4 , ... 26
// A => B , C , D , ... Z
//      27, 28, 29, ... 52
// A => AA, AB, AC, ... AZ
//      53, 54, 55, ... 78
// B => BA, BB, BC, ... BZ
//      79, 80, 81, ... 104
// C => CA, CB, CC, ... CZ
// D => DA, DB, DC, ... DZ

// 26 = Z
// 52 (26 + 26) = AZ
// 53 (26 + 27) = BA
// ZZ => AAA

const assert = require("assert")

const encodeNumber = num => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let result = ""
  if (num <= 26) {
    return alphabet[num - 1]
  }
  // subtracting one from the index here will work for all Z letters (eg AZ, BZ)
  //result += alphabet[Math.floor(num / 26) - 1 - 1]
  // leaving as is works for all letters except Z (AA, BT)
  result += alphabet[Math.floor(num / 26) - 1]
  if (num / 26 >= 2) {
    if ((num % 26) - 1 < 0) {
      result += alphabet.slice((num % 26) - 1)
    } else {
      result += alphabet[(num % 26) - 1]
    }
  } else {
    result += alphabet[(num % 26) - 1]
  }
  return result
}

// works
console.log(encodeNumber(26)) // Z
console.log(encodeNumber(27)) // AA
console.log(encodeNumber(28)) // AB
console.log(encodeNumber(36)) // AJ

// doesn't work
console.log(encodeNumber(52)) // AZ
console.log(encodeNumber(78)) // BZ
