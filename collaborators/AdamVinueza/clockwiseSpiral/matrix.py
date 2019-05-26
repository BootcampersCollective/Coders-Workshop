from node import Node
from direction import Direction, direction_generator

class Matrix:
    __slots__ = [ 'nodes', 'orienter', 'matrix' ]

    def __init__(self, rows, columns):
        self.orienter = None
        self.nodes = []
        self.matrix = []
        value = 1
        for r in range(rows):
            self.matrix.append([])
            for c in range(columns):
                node = Node(value, r, c)
                self.matrix[r].append(node)
                self.nodes.append(node)
                value += 1
        for r in range(rows):
            for c in range(columns):
                node = self.get_node(r, c)
                node.neighbors = node.get_neighbors(self.matrix)

    def change_direction(self, direction):
        if self.orienter is None:
            self.orienter = direction_generator(direction)
        return next(self.orienter)

    def invalid(self, node):
        return node is None or node.visited

    def get_node(self, row, col):
        return self.matrix[row][col]

    def traverse(self, row=0, column=0, values=[], direction=Direction.RIGHT):
        node = self.get_node(row, column)
        if node.visited:
            return values
        node.visited = True
        values.append(node.value)
        next_node = node.neighbors[direction]
        if self.invalid(next_node):
            direction = self.change_direction(direction)
            next_node = node.neighbors[direction]
            if self.invalid(next_node):
                # we've already changed direction once, so we're done
                return values
        return self.traverse(next_node.row, next_node.column, values, direction)
