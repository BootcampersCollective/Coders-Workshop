from cell import Cell

class MonitorableGrid(object):
    __slots__ = [ 'matrix' ]

    def __init__(self, matrix):
        self.matrix = matrix.copy()
        for i in range(len(self.matrix)):
            for j in range(len(self.matrix[i])):
                value = self.matrix[i][j]
                self.matrix[i][j] = Cell(value)

    def get_cell(self, location):
        row, column = location
        return self.matrix[row][column]

    def visit(self, location):
        row, column = location
        self.matrix[row][column].visited = True

