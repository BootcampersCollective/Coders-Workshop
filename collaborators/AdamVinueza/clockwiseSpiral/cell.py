class Cell(object):
    __slots__ = [ 'value', 'visited' ]
    def __init__(self, value):
        self.value = value
        self.visited = False
