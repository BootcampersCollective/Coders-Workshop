from direction import Direction, direction_generator
from monitorablegrid import MonitorableGrid

class Roomba(object):
    '''
    A traverser of multidimensional arrays, for the moment hard-coded
    to traverse in a clockwise spiral.
    '''
    __slots__ = [ '_floorplan', '_direction', '_current_location', \
            '_orienter', '_trail' ]

    def __init__(self, matrix):
        self._floorplan = MonitorableGrid(matrix)
        self._orienter = direction_generator()
        self._direction = next(self._orienter)
        self._current_location = 0, 0
        self._trail = []
        if not matrix or not len(matrix[0]):
            raise ValueError('Invalid input matrix')

    def _get_next_location(self):
        row = self._current_location[0]
        column = self._current_location[1]
        if self._direction == Direction.RIGHT:
            column += 1
        elif self._direction == Direction.DOWN:
            row += 1
        elif self._direction == Direction.LEFT:
            column -= 1
        elif self._direction == Direction.UP:
            row -= 1
        else:
            raise ValueError('Invalid enum value: {0}'.format(self._direction))
        return (row, column)

    def _change_direction(self):
        self._direction = next(self._orienter)
        return self._get_next_location()

    def _move(self):
        self._mark()
        next_location = self._get_next_location()
        if self._must_turn(next_location):
            next_location = self._change_direction()
            if self._must_turn(next_location):
                return
        self._current_location = next_location
        self._move()

    def _mark(self):
        self._floorplan.visit(self._current_location)
        self._trail.append(str(self._floorplan.get_cell(
            self._current_location).value))

    def _must_turn(self, next_location):
        _must_turn = False
        try:
            cell = self._floorplan.get_cell(next_location)
            _must_turn = cell.visited
        except IndexError:
            _must_turn = True
        return _must_turn

    def start(self):
        self._move()
        print(', '.join(self._trail))
