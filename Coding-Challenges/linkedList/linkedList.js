// Given a linked list, rearrange the node values such that they appear in alternating low -> high -> low -> high ... form.
// For example, given 1 -> 2 -> 3 -> 4 -> 5, you should return 1 -> 3 -> 2 -> 5 -> 4.

// input:
// 1 -> 2 -> 3 -> 4 -> 5

// input = 15
// for i = 1; i < input; i++
// 1 to 15 to 2 to 14

// {
// "head": {value: 1, next: node2}
// const node2 = {value: 2, next: node3}
// const node3 = {value: 3, next: node4}
// "3":
// "4":
// "5": "end"
// }

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  add(item) {
    const node = new LinkedListNode(item)

    if (this.head === null) {
      // it's an empty list
      this.head = node
      this.tail = node
    }

    if (this.head !== null) {
      // we have an item in the list
      this.tail.next = node
      this.tail = node
    }
  }

  print() {
    if (this.head === null) return " -> "
    const arr = []
    arr.push(this.head.value)
    let node = this.head
    while (node.next !== null) {
      arr.push(node.next.value)
      node = node.next
    }
    return arr.join(" -> ")
  }

  generateList (input) {
    input = Math.floor(input)
    for (let i = 1; i < input + 1; i++){
      this.add(i)
    }
    return this.print()
  }
}

class LinkedListNode {
  constructor(curValue) {
    this.value = curValue
    this.next = null
  }
}

const lList = new LinkedList()
console.log(lList.print())
console.log(lList.generateList(15))
