const assert = require("assert")

const languageTallyReducer = (a, c) => {
  if (a[c.language]) {
    a[c.language] ++
  } else {
    a[c.language] = 1
  }
  return a
}

const isMeetupLanguageDiverse = (list) => {
  const sorted = Object.values(list.reduce(languageTallyReducer, {})).sort((a, b) => b - a)
  return sorted[0] / sorted[sorted.length - 1] <= 2
}

assert.deepStrictEqual(isMeetupLanguageDiverse([
  { firstName: "Daniel", lastName: "J.", country: "Aruba", continent: "Americas", age: 42, language: "Python" },
  { firstName: "Kseniya", lastName: "T.", country: "Belarus", continent: "Europe", age: 22, language: "Ruby" },
  { firstName: "Sou", lastName: "B.", country: "Japan", continent: "Asia", age: 43, language: "Ruby" },
  { firstName: "Hanna", lastName: "L.", country: "Hungary", continent: "Europe", age: 95, language: "JavaScript" },
  { firstName: "Jayden", lastName: "P.", country: "Jamaica", continent: "Americas", age: 18, language: "JavaScript" },
  { firstName: "Joao", lastName: "D.", country: "Portugal", continent: "Europe", age: 25, language: "JavaScript" }
]), false)

assert.deepStrictEqual(isMeetupLanguageDiverse([
  { firstName: "Daniel", lastName: "J.", country: "Aruba", continent: "Americas", age: 42, language: "Python" },
  { firstName: "Sou", lastName: "B.", country: "Japan", continent: "Asia", age: 43, language: "Ruby" },
  { firstName: "Hanna", lastName: "L.", country: "Hungary", continent: "Europe", age: 95, language: "JavaScript" },
]), true)
console.log("All tests passed!")