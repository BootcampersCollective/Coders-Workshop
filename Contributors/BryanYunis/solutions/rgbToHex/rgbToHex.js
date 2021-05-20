const assert = require('assert')

const rgb = (r, g, b) => [r, g, b]
  .reduce((hex, color) => hex + decimalToHex(color), '')

const decimalToHex = (decimal) => {
  if (decimal < 0) return '00'
  if (decimal > 255) return 'FF'
  let hex = ''
  let workingNum = decimal;
  while (workingNum > 15) {
    const mod = workingNum % 16
    const currHex = mod > 9 ? hexMap[mod] : mod
    hex += currHex
    workingNum = Math.floor(workingNum / 16)
  }
  hex = workingNum > 9 ? hexMap[workingNum] + hex : workingNum + hex
  return decimal < 16 ? '0' + hex : hex
}

const hexMap = {
  10: 'A',
  11: 'B',
  12: 'C',
  13: 'D',
  14: 'E',
  15: 'F'
}

assert.strictEqual(rgb(173, 255, 47), 'ADFF2F')
assert.strictEqual(rgb(0, 89, 192), '0059C0')
assert.strictEqual(rgb(-22, 0, 312), '0000FF')
console.log('All tests passed!')