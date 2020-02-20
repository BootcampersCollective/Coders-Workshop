class Node {
  next: any;

  constructor(public element: any) {
    this.element = element;
    this.next = null;
  }
}

/**
 * Note the print() method included. This will display your list in a more
 * easily readable format.
 */
export class LinkedList {
  head: Node | null;

  constructor() {
    this.head = null;
  }

  add(element: any) {
    const node = new Node(element);
    let traversal: Node | null = this.head;
    if (this.head === null) {
      this.head = node;
    } else {
      while (traversal?.next !== null) {
        traversal = traversal?.next;
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

  getLastNode(): Node | null {
    if (this.head === null) {
      return null;
    }
    let traversal = this.head;
    while (traversal.next !== null) {
      traversal = traversal.next;
    }
    return traversal;
  }

  rotate(k: number): void {
    for (let i = 0; i < k; i++) {
      const lastNodeValue = this.getLastNode()!.element;
      let traversal = this.head;
      let traversalValue = traversal!.element;
      let traversalNextValue = traversal!.next.element;
      while (traversal!.next !== null) {
        /**
         * This section was a DOOZY!
         */
        traversalNextValue = traversal!.next.element;
        traversal!.next.element = traversalValue;
        traversalValue = traversalNextValue;
        traversal = traversal!.next;
      }
      this.head!.element = lastNodeValue;
      this.getLastNode()!.next = null;
    }
  }
}