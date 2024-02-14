const assert = require("assert")

// only the first argument to JSON.stringify implemented
const stringify = (obj) => {
  let result = "{"
  const entries = Object.entries(obj)
  entries.forEach(([key, val], i) => {
    if (Array.isArray(val)) {
      result += `${key}: [${val.join(",")}]`
    } else if (typeof val === "object") {

      result += `${key}: ${stringify(val)}`
    } else result += `${key}: ${val}`

    if (i !== entries.length -1) {
      result += ", "
    }
  })

  return result + "}"
}


assert.equal(stringify({ a: 1, b: 2 }), "{a: 1, b: 2}")
assert.equal(stringify({ a: 1, nested: {c: 2, d: 3} }), "{a: 1, nested: {c: 2, d: 3}}")
assert.equal(stringify({ a: [1, 2, 3], b: "string" }), "{a: [1,2,3], b: string}")
