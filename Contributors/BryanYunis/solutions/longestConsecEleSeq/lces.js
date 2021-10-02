const lces = (arr) => {
  const seen = new Map()
  let longest = 1

  arr.forEach((num) => {
    if (seen.has(num + 1) && !seen.has(num)) {
      longest += 1
    }
    if (seen.has(num - 1) && !seen.has(num)) {
      longest += 1
    }
    seen.set(num, num)
  })
  return longest
}

console.assert(lces([100, 4, 200, 1, 3, 2]) === 4)
console.assert(lces([7, 215, 6, 8, 85, 9, 133, 11, 191, 10]) === 6)
console.assert(lces([1, 2, 3, 4, 5, 6, 12, 7, 8, 9, 10, 11]) === 12)

console.log("👍")
