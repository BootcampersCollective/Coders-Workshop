class Node {
    constructor(name) {
        this.children = []
        // this.parent = null
        this.name = name
    }
}

class Tree {
    constructor(root) {
        this.root = root
    }
    findNode(name) {
        return this.findNodeByName(this.root, name)
    }
    findNodeByName(node, name) {
        if (node.name === name) {
            return node
        }
        let ans = null
        for (let i = 0; i < node.children.length; i++) {
            ans = this.findNodeByName(node.children[i], name)
            if (ans) {
                break
            }
        }
        return ans
    }

    addChild(parentName, childName) {
        const newChild = new Node(childName)
        const parentNode = this.findNode(parentName)
        if (!parentNode) return
        // newChild.parent = parentNode
        parentNode.children.push(newChild)
    }

    getChildren(name) {
        const foundNode = this.findNode(name)
        if (foundNode) {
            return foundNode.children.map((child) => child.name)
        }
        return null
    }
}

const rootFamily = new Node('CoolFamily')
const tree = new Tree(rootFamily)

console.log(tree)
console.log(JSON.stringify(tree))

tree.addChild('CoolFamily', 'Emir')
tree.addChild('Emir', 'John')
tree.addChild('Emir', 'Alex')
tree.addChild('Alex', 'Joel')
tree.addChild('Alex', 'Rebecca')
tree.addChild('John', 'Joe')
tree.addChild('John', 'Saul')

console.log(tree.getChildren('John')) // [Joe, Saul]
console.log(tree.getChildren('Alex')) // [Joel, Rebecca]
