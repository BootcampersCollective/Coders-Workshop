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

  postOrder(arr, node) {
    if (node) {
      this.postOrder(arr, node.left);
      this.postOrder(arr, node.right);
      arr.push(node.key);
    }
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

const evergreen = new BinarySearchTree();
evergreen.insert(7);
evergreen.insert(5);
evergreen.insert(9);
evergreen.insert(3);
evergreen.insert(11);
evergreen.insert(6);
let arr = [];
evergreen.inOrder(arr, evergreen.root);
console.log(arr);
arr = [];
evergreen.preOrder(arr, evergreen.root);
console.log(arr);
arr = [];
evergreen.postOrder(arr, evergreen.root);
console.log(arr);
console.log(evergreen);
