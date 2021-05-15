const assert = require('assert')
class TwoDIterator {
  constructor(arr) {
    this.arr = arr
    this.row = 0
    this.col = 0
    this.cache = '00'
  }
  next() {
    const currItem = this.arr[this.row][this.col]
    if (currItem) {
      this.col++
      return currItem
    }
    if (this.arr[this.row + 1]) {
      this.row++
      this.col = 0
      return this.next()
    }
  }
  hasNext() {
    this.cache = '' + this.row + this.col
    const hasNext = !!this.next()
    this.row = Number(this.cache[0])
    this.col = Number(this.cache[1])
    return hasNext
  }
}

const iterator = new TwoDIterator([[1, 2], [3], [], [4, 5, 6], []])
assert.strictEqual(iterator.next(), 1)
assert.strictEqual(iterator.hasNext(), true)
assert.strictEqual(iterator.next(), 2)
assert.strictEqual(iterator.next(), 3)
assert.strictEqual(iterator.next(), 4)
assert.strictEqual(iterator.next(), 5)
assert.strictEqual(iterator.next(), 6)
assert.strictEqual(iterator.hasNext(), false)
console.log('👍')
