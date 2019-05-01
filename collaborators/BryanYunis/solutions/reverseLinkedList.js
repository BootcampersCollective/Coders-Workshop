// reverse a linked list
class Node {
    constructor(element) {
        this.element = element
        this.next = null
        this.prev = null
    }
}

// note: a this.tail reference is shown here but is *not* necessary to reverse the list. 
// The tail reference can be used to more efficiently conduct some operations (like adding to the end of a list)
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    add(element) {
        const node = new Node(element)
        let traversal = this.head
        if (this.head === null) {
            this.head = node
            this.tail = node
        } else {
            while (traversal.next !== null) {
                traversal = traversal.next
            }
            traversal.next = node
            node.prev = traversal
            this.tail = node
        }
    }
    addToEnd(element) {
        const node = new Node(element)
        let traversal = this.tail
        if (this.tail === null) {
            this.tail = node
            this.head = node
        } else {
            traversal.next = node
            node.prev = traversal
            this.tail = node
        }
    }
    reverse() {
        let traversal = this.head
        this.tail = this.head
        let temp = null
        while (traversal !== null) {
            temp = traversal.prev
            traversal.prev = traversal.next
            traversal.next = temp
            traversal = traversal.prev
        }
        if (temp !== null) {
            this.head = temp.prev
        }
    }
    print() {
        if (this.head == null) {
        return '';
        }
        let objString = `${this.head.element}`;
        let traversal = this.head.next;
        while (traversal !== null) {
        objString = `${objString} -> ${traversal.element}`
        traversal = traversal.next
        }
        return objString
    }
}
