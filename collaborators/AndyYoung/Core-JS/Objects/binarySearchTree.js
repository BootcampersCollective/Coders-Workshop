 class Node {
	constructor(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	
	insert(key) {
		if (this.root === null) {
			this.root = new Node(key)
		}
	}
	insertNode(node, key) {
		if (node.key > key) {
			if (node.left === null) {
				node.left = new Node(key);
			} else {
				this.insertNode(node.left, key);
			}
		}
		if (node.key < key) {
			if (node.right === null) {
				node.right = new Node(key)
			} else {
				this.insertNode(node.right, key);
			}
		}
	}
}

var evergreen = new BinarySearchTree();

evergreen.insert(7)
evergreen.insert(5)
evergreen.insert(9)
evergreen.insert(3)
evergreen.insert(11)
evergreen.insert(6)