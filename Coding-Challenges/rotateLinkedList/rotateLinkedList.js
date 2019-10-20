class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

/**
 * Note the print() method included. This will display your list in a more
 * easily readable format.
 */
class LinkedList {
  constructor() {
    this.head = null;
  }

  add(element) {
    const node = new Node(element);
    let traversal = this.head;
    if (this.head === null) {
      this.head = node;
    } else {
      while (traversal.next !== null) {
        traversal = traversal.next;
      }
      traversal.next = node;
    }
  }

  print() {
    if (this.head === null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let traversal = this.head.next;
    while (traversal !== null) {
      objString = `${objString} -> ${traversal.element}`;
      traversal = traversal.next;
    }
    return objString;
  }

  rotate(k) {
    // Your code goes here
  }
}
