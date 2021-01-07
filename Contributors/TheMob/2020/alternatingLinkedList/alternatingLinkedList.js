//Given a linked list, rearrange the node values such that they appear in alternating low -> high -> low -> high ... form. 
// For example, given 1 -> 2 -> 3 -> 4 -> 5, you should return 1 -> 3 -> 2 -> 5 -> 4.

class LinkedList {

    constructor() {
        this.head = null
    }

    add(ele) {
      if (this.head === null) {
        this.head = new Node(ele);
      } else {
        let current = this.head; // traversal pointer
        while (current.next !== null) {
          current = current.next;
        }
        current.next = new Node(ele);
      }
    }
    linkedListToArray() {
        const arr = []
        if (this.head === null) {
          return []
        }
        let current = this.head;
        while (current !== null) {
            arr.push(current.element);
            current = current.next;
        }
        return arr;
    }
}

class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const alternatingOrder = arr => {
    /// [1, 2, 3, 4, 5] => [1, 3, 2, 5, 4]
    arr.sort()
    
    for (let i = 1; i < arr.length; i += 2) {
        let j = i + 1; // if j is out of bounds, break
        if (j >= arr.length) break;
        swap(arr, i, j);
    }
    return arr
}

arrayToLinkedList(arr) {
  let linkedListArr = new LinkedList();
  arr.forEach((ele) => linkedListArr.this.add(ele));
  return linkedListArr;
}

function main() {
  let links = new LinkedList();
  links.add(1);
  links.add(2);
  links.add(3);
  links.add(4);
  links.add(5);
  // have 1 -> 2 -> 3 -> 4 -> 5
  const linkedListArr = links.linkedListToArray()
  // [1, 2, 3, 4, 5]
const alternatingOrderArr = alternatingOrder(linkedListArr)
const alternatingLinkedList = arrayToLinkedList(alternatingOrderArr)
console.log(alternatingLinkedList)

  let arr = [1, 2, 3, 4, 5];
  console.log(alternatingOrder(arr)); // should be 1, 3, 2, 5, 4
  let arr1 = [1, 2, 3, 4];
  console.log(alternatingOrder(arr1)); // should be 1, 3, 2, 4
}
main()