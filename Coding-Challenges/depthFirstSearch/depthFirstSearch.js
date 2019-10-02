#!/usr/bin/env node

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
    // write your code here
  }
}

const test1 = new Node("A");
test1.addChild("B").addChild("C").addChild("D");
test1.children[0].addChild("E").addChild("F");
test1.children[2].addChild("G").addChild("H");
test1.children[0].children[1].addChild("I").addChild("J");
test1.children[2].children[0].addChild("K");

test1.depthFirstSearch([]);
