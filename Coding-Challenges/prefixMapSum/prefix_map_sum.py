class PrefixMapSum:

    def __init__(self):
        pass

    def insert(self, key: str, value: int):
        pass

    def sum(self, prefix: str):
        pass


map_sum = PrefixMapSum()
map_sum.insert("columnar", 3)
assert map_sum.sum("col") == 3
map_sum.insert("column", 2)
assert map_sum.sum("col") == 5
