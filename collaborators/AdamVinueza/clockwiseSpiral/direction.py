from enum import Enum

class Direction(Enum):
    RIGHT = 1,
    DOWN  = 2,
    LEFT  = 3,
    UP    = 4

def direction_generator(clockwise=True):
    order = [
        Direction.LEFT,
        Direction.DOWN,
        Direction.RIGHT,
        Direction.UP
    ]
    if clockwise:
        order = [
            Direction.RIGHT,
            Direction.DOWN,
            Direction.LEFT,
            Direction.UP
        ]
    idx = 0
    while True:
        yield order[idx]
        idx = (idx + 1) % 4
