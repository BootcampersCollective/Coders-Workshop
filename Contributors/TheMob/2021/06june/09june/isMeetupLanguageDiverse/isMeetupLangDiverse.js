const assert = require("assert")

function isDiverse (arr) {
  const hashmap = {}

  arr.forEach((ele) => {
    // get the language attribute
    // store into another object
    // check if that property exists
    // if it does, then we need to increment it
    // if not, we need to create it

    if (hashmap[ele.language]) {
      hashmap[ele.language] += 1
    } else {
      hashmap[ele.language] = 1
    }
  })

  const max = Math.max(...Object.values(hashmap))
  const min = Math.min(...Object.values(hashmap))
  return max <= min * 2
}

assert.strictEqual(isDiverse(
  [
    { firstName: "Daniel", lastName: "J.", country: "Aruba", continent: "Americas", age: 42, language: "Python" },
    { firstName: "Kseniya", lastName: "T.", country: "Belarus", continent: "Europe", age: 22, language: "Ruby" },
    { firstName: "Sou", lastName: "B.", country: "Japan", continent: "Asia", age: 43, language: "Ruby" },
    { firstName: "Hanna", lastName: "L.", country: "Hungary", continent: "Europe", age: 95, language: "JavaScript" },
    { firstName: "Jayden", lastName: "P.", country: "Jamaica", continent: "Americas", age: 18, language: "JavaScript" },
    { firstName: "Joao", lastName: "D.", country: "Portugal", continent: "Europe", age: 25, language: "JavaScript" }
  ]
), false)

assert.strictEqual(isDiverse(
  [
    { firstName: "Daniel", lastName: "J.", country: "Aruba", continent: "Americas", age: 42, language: "Python" },
    { firstName: "Kseniya", lastName: "T.", country: "Belarus", continent: "Europe", age: 22, language: "Ruby" },
    { firstName: "Sou", lastName: "B.", country: "Japan", continent: "Asia", age: 43, language: "Ruby" },
    { firstName: "Hanna", lastName: "L.", country: "Hungary", continent: "Europe", age: 95, language: "Python" },
    { firstName: "Jayden", lastName: "P.", country: "Jamaica", continent: "Americas", age: 18, language: "JavaScript" },
    { firstName: "Joao", lastName: "D.", country: "Portugal", continent: "Europe", age: 25, language: "JavaScript" }
  ]
), true)

console.log("All tests passed!")
