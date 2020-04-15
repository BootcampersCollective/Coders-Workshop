class Node {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.children = [];
    this.distance = 0;
    this.visited = false;
  }

  addChild(value) {
    let newNode = new Node(value);
    this.children.push(newNode);
    newNode.parent = this;
    return newNode;
  }

  setDistance(newDist) {
    this.distance = newDist;
  }

  visit() {
    this.visited = true;
  }

  findAdjacentUnvisited() {
    let adjacents = [...this.children];
    if (this.parent) {
      adjacents.push(this.parent);
    }
    return adjacents.filter((node) => !node.visited);
  }
}

class Tree {
  constructor(rootVal) {
    this.root = new Node(rootVal);
  }

  traverse(cb) {
    function recurseTraverse(node) {
      cb(node);
      if (node.children.length > 0) {
        node.children.forEach((child) => recurseTraverse(child));
      }
    }
    recurseTraverse(this.root);
  }

  findNodesAway(startNode, dist) {
    let result = [];
    
    let queue = [startNode];
    let thisDistance = 0
    while (queue.length > 0 && thisDistance <= dist) {
      let thisNode = queue.shift(); // dequeue
      thisNode.visit();

      let adjacents = thisNode.findAdjacentUnvisited();
      adjacents.forEach((adjNode) => adjNode.setDistance(thisNode.distance+1));
      queue = queue.concat(adjacents);

      if (thisNode.distance === dist) result.push(thisNode.value);
    }

    //reset
    this.traverse((node) => node.visited = false);
    this.traverse((node) => node.setDistance(0));

    return result;
  }

  print() {
    let result = `${this.root.value}`;
    let level = 1;
    while (this.findNodesAway(this.root, level).length > 0) {
      result+= ('\n' + this.findNodesAway(this.root, level).toString());
      level++;
    }
    console.log(result);
  }
}


function main() {
  let exampleTree = new Tree(1);
  let two = exampleTree.root.addChild(2);
  let three = exampleTree.root.addChild(3);
  let four = two.addChild(4);
  let five = two.addChild(5);
  let seven = five.addChild(7);
  let six = three.addChild(6);

  exampleTree.print();
}


main();