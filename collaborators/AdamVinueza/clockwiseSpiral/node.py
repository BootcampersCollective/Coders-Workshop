from direction import Direction

class Node:
    __slots__ = [ 'value', 'visited', 'neighbors', 'row', 'column' ]
    def __init__(self, value, row, column):
        self.value = value
        self.visited = False
        self.row = row
        self.column = column
        self.neighbors = {}

    def next(self, direction):
        return self.neighbors[direction]
    
    def get_neighbor(self, row_inc, col_inc, matrix):
        row = self.row + row_inc
        col = self.column + col_inc
        if col >= 0 and col < len(matrix[0]) and row >= 0 and row < len(matrix):
            return matrix[row][col]
        return None

    def get_neighbors(self, matrix):
        neighbors = {}
        # RIGHT: row, column + 1
        neighbors[Direction.RIGHT] = self.get_neighbor(0, 1, matrix)
        # DOWN: row + 1, column
        neighbors[Direction.DOWN] = self.get_neighbor(1, 0, matrix)
        # LEFT: row, column - 1
        neighbors[Direction.LEFT] = self.get_neighbor(0, -1, matrix)
        # UP: row - 1, column
        neighbors[Direction.UP] = self.get_neighbor(-1, 0, matrix)
        return neighbors
