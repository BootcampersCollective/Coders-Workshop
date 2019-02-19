from cell import Cell

class MonitorableGrid(object):
    __slots__ = [ '_matrix' ]

    def __init__(self, matrix):
        self._matrix = matrix.copy()
        for i in range(len(self._matrix)):
            for j in range(len(self._matrix[i])):
                value = self._matrix[i][j]
                self._matrix[i][j] = Cell(value)

    def get_cell(self, location):
        row, column = location
        return self._matrix[row][column]

    def visit(self, location):
        row, column = location
        self._matrix[row][column].visited = True

