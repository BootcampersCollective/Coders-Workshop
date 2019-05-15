/*

You are given a Node class that has a name and an array of optional children Nodes. When put together, Nodes form a simple tree-like structure. Implement the depthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Depth-first Search approach (specifically navigating the tree from left to right), stores all the of the Nodes' names in the input array, and returns it.

input:
		A
	  /	| \
     B	C  D
    / \	  / \
   E  F  G   H
     / \  \
    I  J   k


output: ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]

*/

class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    depthFirstSearch(array) {
   		// write your code here..
    }
}
const test1 = new Node("A");
test1.addChild("B").addChild("C").addChild("D");
test1.children[0].addChild("E").addChild("F");
test1.children[2].addChild("G").addChild("H");
test1.children[0].children[1].addChild("I").addChild("J");
test1.children[2].children[0].addChild("K");

test1.depthFirstSearch([]);
