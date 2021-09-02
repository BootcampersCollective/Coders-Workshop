// a way to keep pieces of data organized rather than putting them in an array
// each has a property (next) which is a reference to the next item in the list
// can have links to next and previous elements
// can traverse both ways (forward or backwards)
// have `null` or some way to signify the end
// compared to array there is no natural "end"
// in the family of lists
// have to traverse the linked list to get what you're looking for

// each piece of data a Node

// HEAD --> Node { next: null }

// each LinkedList class
class LinkedList{
    constructor(headNode){
        this.head = headNode;
        this.tail = this.head;
    }

	addElement(Node) {
		this.tail.next = Node;
		this.tail = this.tail.next;
	}
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// add 'a' to our linked list

const letterA = new Node('a')
const letterB = new Node('b')
const letterC = new Node('c')

const myList = new LinkedList(letterA);
myList.addElement(letterB)
myList.addElement(letterC)

console.log(myList)
