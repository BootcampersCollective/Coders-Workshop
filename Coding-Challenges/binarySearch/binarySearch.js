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

  findClosestValue(value) {
    // TODO: Your code goes here
  }

  preOrder(arr, node) {
    if (node) {
      arr.push(node.key);
      this.preOrder(arr, node.left);
      this.preOrder(arr, node.right);
    }
  }

  inOrder(arr, node) {
    if (node) {
      this.inOrder(arr, node.left);
      arr.push(node.key);
      this.inOrder(arr, node.right);
    }
  }

  postOrder(arr, node) {
    if (node) {
      this.postOrder(arr, node.left);
      this.postOrder(arr, node.right);
      arr.push(node.key);
    }
  }

  insert(key) {
    if (this.root === null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
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
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }
}
