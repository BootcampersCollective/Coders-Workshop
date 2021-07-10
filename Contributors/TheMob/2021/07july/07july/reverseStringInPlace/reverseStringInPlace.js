// reverse string in place
// 'abcd' -> 'dcba'

function reverseStr(str) {
  const arr = str.split("")
  return arr.reverse().join("")
}

function reverseStrInPlace(str) {
  const arr = str.split("")
  for (let i = 0, j = arr.length - 1; i < arr.length / 2; i += 1, j -= 1) {
    const tmp = arr[j]
    arr[j] = arr[i]
    arr[i] = tmp
  }
  return arr.join("")
}

console.log(reverseStr("abcd"))// 'dcba'
console.log(reverseStrInPlace("abcdefg"))// 'gfedcba'
