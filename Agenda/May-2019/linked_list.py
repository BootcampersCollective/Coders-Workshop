class Node:
    def __init__(self, element=None):
        self.element = element
        self.next = None
    
class SinglyLinkedList:
    def __init__(self):
        self.head = None
    def add(self, data):
        node = Node(data)

        if self.head is None:
            self.head = node

        else:
            traversal = self.head
            while traversal.next:
                traversal = traversal.next
            traversal.next = node
        
    def iterate(self):
        traversal = self.head
        while traversal:
            val = traversal.element
            traversal = traversal.next
            yield val





list = SinglyLinkedList()
list.add(1)
list.add(2)
for number in list.iterate():
    print(number)

                