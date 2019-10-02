class Node {
    constructor(element) {
        this.element = element
        this.next = null
        this.prev = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    
    add(element) {
        const node = new Node(element)
        let traversal = this.head
        if (this.head === null) {
            this.head = node
            this.prev = null
        }
        else {
            while (traversal.next !== null) {
                traversal = traversal.next
            }
            traversal.next = node
            node.prev = traversal
        }
    }
    reverse(){
        let traversal = this.head
        let temp = null
        while (traversal !== null) {
            temp = traversal.prev
            traversal.prev = traversal.next
            traversal.next = temp
            traversal = traversal.prev
        }
        this.head = temp
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

var myList = new LinkedList();
myList.add(55);
myList.add(57);
myList.add(59);
myList.add(61);
myList.reverse();
console.log(myList.print());