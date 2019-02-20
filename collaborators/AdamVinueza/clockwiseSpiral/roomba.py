from direction import Direction, direction_generator
from monitorablegrid import MonitorableGrid

class Roomba(object):
    '''
    A traverser of multidimensional arrays, for the moment hard-coded
    to traverse in a clockwise spiral.

    Adding a start coordinate and a direction to the constructor, and
    modifying the Direction enumeration so that there are clockwise and
    counterclockwise orderings should make it possible for the Roomba to
    traverse counter-clockwise from arbitrary points in the matrix.

    Roomba instances work as follows. Given a matrix, a floor plan is
    constructed using an instance of MonitorableGrid, which transforms
    a matrix of integers into a matrix of Cell objects, each of which
    contains the integer value as a value and a boolean flag indicating
    whether the Cell has been visited. To traverse the floor plan, Roomba
    employs the following operations:

    - move: recursively follows a path, changing direction as necessary,
      until it must stop.
    - change_direction: uses the direction package's built-in generator to
      retrieve the next (clockwise) Direction, then returns the next
      location given that Direction.
    - must_turn: returns True if the next location in the current direction
      is either off the end of the matrix or a Cell that has been visited.
    - mark: sets the currently occupied Cell as visited.
    
    The traversal algorithm is simple: the instance will move until it must
    turn, then it will change Direction in a clockwise fashion and continue
    moving until it can't move any longer. Along the way it will mark each
    Cell as visited and store its value in a breadcrumb trail. When it can't
    move any longer (effectively, when it must turn immediately after it has
    changed Direction), the move operation returns.

    '''
    __slots__ = [ '_floorplan', '_direction', '_current_location', \
            '_orienter', '_trail' ]

    def __init__(self, matrix, start=(0, 0), clockwise=True):
        self._floorplan = MonitorableGrid(matrix)
        self._orienter = direction_generator(clockwise)
        self._direction = next(self._orienter)
        self._current_location = start
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
        print(' '.join(self._trail))

