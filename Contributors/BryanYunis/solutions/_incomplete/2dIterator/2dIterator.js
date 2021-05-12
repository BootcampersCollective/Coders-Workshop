class TwoDIterator {
  constructor(arr) {
    this.arr = arr
    this.row = 0
    this.col = 0
  }
  next() {
    const currItem = this.arr[this.row][this.col]
    console.log('next', this.row, this.col, currItem)
    if (currItem) {
      this.col++
      return currItem
    }
    if (this.arr[this.row + 1]) {
      console.log('hi')
      this.row++
      this.col = 0
      this.next()
    }
  }
}

const iterator = new TwoDIterator([[1, 2], [3], [], [4, 5, 6]])
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
