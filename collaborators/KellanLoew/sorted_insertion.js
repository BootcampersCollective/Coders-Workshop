class Node {
    constructor(key) {
        this.key = key;
        this.right = null;
        this. left = null;
    }
}

class BinarySearchTree{
    constructor(key) { //This builds the first node
        this.root = null;
    }
    insert(key){
        if  (this.root === null){
            this.root = new Node(key);
        }
        else{
            this.insertNode(this.root, key); //Traverses the array until it finds a null node
        }
    }
    insertNode(node, key){
        if (node.key > key) {
            if (node.left === null){
                node.left = new Node(key);
            }
            else{
                this.insertNode(node.left, key)
            }
        }
        if(node.key < key){
            if(node.right === null){
                node.right = new Node(key);
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
console.log(evergreen);
function SearchBinary(node, key){
    if (node == key){
        return true;
    }
    else if (node == null){
        return false;
    }
    else if (node > key){

    }
    else{

    }

}