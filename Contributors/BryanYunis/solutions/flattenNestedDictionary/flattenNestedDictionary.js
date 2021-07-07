const entries = (o) => Object.entries(o)
const isObj = (i) => typeof i === "object" && !Object.hasOwnProperty.call(i, "length")


const nestedObjEntries = (obj) => {
  return entries(obj).reduce((a, [key, val]) => isObj(val)
    ? a.concat(key, nestedObjEntries(val))
    : a.concat([key, val]), [])
}

console.log(nestedObjEntries({ winston: { iswinston: true } }))
