const assert = require('assert')

class Node {
  constructor(item) {
    this.id = item.id
    this.item = item
    this.prev = null
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.count = 0
  }

  printList() {
      if (!this.head) return 'empty'
      let trav = this.head
      let listString = ''
      while (trav.next) {
          listString += `${trav.id}->`
          trav = trav.next
      }
      listString += `${trav.id}`
      return listString
  }

  /**
   * 
   * @param {Object} node list item 
   * @returns LinkedList
   */
  add(node) {
    if (!node || !node.id) return null
    this.count += 1
    if (!this.head) {
      this.head = node
      return
    }
    let trav = this.head
    while (trav.next !== null) {
      trav = trav.next
    }
    trav.next = node
    node.prev = trav
    return this
  }
  /**
   * 
   * @param {Object} node list item
   * @returns Linked List
   */
  remove(node) {
    if (!this.head) return null
    let trav = this.head
    while (node.id !== trav.id) {
      trav = trav.next
    }
    if (trav.id === node.id) {
      trav.prev.next = trav.next
      this.count -= 1
    }
    return null
  }
  /**
   * 
   * @param {Number} id list item id
   * @param {String} dir 'up', 'down'
   * @returns LinkedList
   */
  reorder(id, dir) {
    if (!['up', 'down'].includes(dir)) return null
    if (this.count < 2) return this

    const reorderDown = (node) => {
        const curr = node
        const {next, prev} = node
        if (!next) return null
        next.prev = curr.prev
        curr.next = next.next
        next.next = curr
        curr.prev = next
        if (prev) prev.next = next // if not, prev is head
    }
    let trav = this.head
    while (trav.id !== id && trav.next) {
      trav = trav.next
    }
    if (trav.id !== id) return null
    // reorder head
    if (trav.id === this.head.id && dir === 'up') return this
    if (dir === 'up') {
        if (trav.prev.id === this.head.id) {
            this.head = trav
        }
        reorderDown(trav.prev)
    }
    if (dir === 'down') {
        if (trav.id === this.head.id) {
            this.head = trav.next
        }
        reorderDown(trav)
    }
    return this
  }
}

const firstItem = new Node({ id: 1, data: 'data1' })
const secondItem = new Node({ id: 2, data: 'data2' })
const thirdItem = new Node({ id: 3, data: 'data3' })
const myList = new LinkedList()
myList.add(firstItem)
myList.add(secondItem)
myList.add(thirdItem)
assert.deepStrictEqual(myList.printList(), '1->2->3')
myList.reorder(2, 'up')
assert.deepStrictEqual(myList.printList(), '2->1->3')
myList.reorder(1, 'down')
assert.deepStrictEqual(myList.printList(), '2->3->1')

console.log('👍')