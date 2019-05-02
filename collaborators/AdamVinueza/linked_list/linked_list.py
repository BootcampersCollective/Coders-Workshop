class Node():
    '''A simple node class for doubly-linked lists.'''
    __slots__ = [ 'key', 'next', 'prev' ]

    def __init__(self, value):
        self.key = value
        self.next = None
        self.prev = None

class LinkedList():
    '''A doubly-linked list, with iteration and in-place reverse and rotation.'''
    __slots__ = [ 'head', 'tail', 'current' ]

    def __init__(self):
        self.head = None
        self.tail = None
        self.current = None

    '''
    The next two methods make LinkedList iterable, meaning you can go through
    the list's items using a for-loop.
    '''

    def __iter__(self):
        return self

    def __next__(self):
        if self.current is None:
            self._resetIterator()
            raise StopIteration
        current = self.current
        self.current = current.next
        return current

    def _resetIterator(self):
        self.current = self.head

    def insertfront(self, x):
        '''Inserts a new node with the specified value at the front.'''
        node = Node(x)
        if self.head is None:
            self.tail = node
        else:
            self.head.prev = node
            node.next = self.head
        self.head = node
        self._resetIterator()

    def insertback(self, x):
        '''Inserts a new node with the specified value at the back.'''
        if self.head is None:
            self.insertfront(x)
        else:
            node = Node(x)
            node.prev = self.tail
            node.prev.next = node
            self.tail = node

    def remove(self, node):
        '''Removes the specified node.'''
        # reset head and tail if necessary
        if node.prev is None:
            self.head = node.next
        if node.next is None:
            self.tail = node.prev
        # you have to stitch the hole before making the hole
        if node.next is not None:
            node.next.prev = node.prev
        if node.prev is not None:
            node.prev.next = node.next
        # disconnect it from the list
        node.next = None
        node.prev = None
        # if we removed the head, we have to reset
        self._resetIterator()
        return node
        
    def reverse(self):
        swap = self.head
        self.head = self.tail
        self.tail = swap
        for node in self:
            swap = node.prev
            node.prev = node.next
            node.next = swap
            node = node.prev

    def rotateright(self, count):
        for i in range(count):
            node = self.remove(self.head)
            self.insertback(node.key)
            
    def traverse(self):
        values = []
        for node in self:
            values.append(node.key)
        return values

