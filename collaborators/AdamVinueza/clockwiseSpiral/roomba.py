from direction import Direction, direction_generator
from monitorablegrid import MonitorableGrid

class Roomba(object):
    __slots__ = [ 'floorplan', 'direction', 'current_location', \
            'orienter', 'trail' ]

    def __init__(self, matrix):
        self.floorplan = MonitorableGrid(matrix)
        self.orienter = direction_generator()
        self.direction = next(self.orienter)
        self.current_location = 0, 0
        self.trail = []

    def get_next_location(self):
        row = self.current_location[0]
        column = self.current_location[1]
        if self.direction == Direction.RIGHT:
            column += 1
        elif self.direction == Direction.DOWN:
            row += 1
        elif self.direction == Direction.LEFT:
            column -= 1
        elif self.direction == Direction.UP:
            row -= 1
        else:
            raise ValueError('Invalid enum value: {0}'.format(self.direction))
        return (row, column)

    def change_direction(self):
        self.direction = next(self.orienter)
        return self.get_next_location()

    def move(self):
        self.mark()
        next_location = self.get_next_location()
        if self.must_turn(next_location):
            next_location = self.change_direction()
            if self.must_turn(next_location):
                return
        self.current_location = next_location
        self.move()

    def mark(self):
        self.floorplan.visit(self.current_location)
        self.trail.append(str(self.floorplan.get_cell(
            self.current_location).value))

    def must_turn(self, next_location):
        must_turn = False
        try:
            cell = self.floorplan.get_cell(next_location)
            must_turn = cell.visited
        except IndexError:
            must_turn = True
        return must_turn

    def start(self):
        self.move()
        print(' '.join(self.trail))

