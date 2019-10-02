class PrefixMapSum:
    def __init__(self):
        self.map = {}

    def insert(self, key, value):
        self.map[key] = value

    def sum(self, prefix):
        return sum(value for key, value in self.map.items() if key.startswith(prefix))

mapsum = PrefixMapSum()
mapsum.insert("columnar", 3)
assert mapsum.sum("col") == 3
mapsum.insert("column", 2)
assert mapsum.sum("col") == 5