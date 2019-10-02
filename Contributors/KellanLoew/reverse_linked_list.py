class Node:
    def __init__(self, element):
        self.element = element
        self.prev = None
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def add(self, element):
        node = Node(element)
        traversal = self.head
        if self.head == None:
            self.head = node
            self.prev = None
        else:
            while traversal.next != None:
                traversal = traversal.next
            traversal.next = node
            node.prev = traversal
    
    def reverse(self):
        traversal = self.head
        temp = None
        while traversal != None:
            temp = traversal.prev
            traversal.prev = traversal.next
            traversal.next = temp
            temp = traversal
            traversal = traversal.prev
        self.head = temp

    def printList(self):
        traversal = self.head
        while traversal != None:
            if traversal.next == None:
                print(traversal.element)
            else:
                print("{} -> ".format(traversal.element), end="")
            traversal = traversal.next



myList = LinkedList()
myList.add(15)
myList.add(30)
myList.add(45)
myList.printList()
myList.reverse()
myList.printList()