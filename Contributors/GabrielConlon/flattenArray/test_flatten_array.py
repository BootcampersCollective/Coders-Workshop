import unittest
import flatten_array as fa

class TestMethods(unittest.TestCase):
    def test_array1(self):
        self.assertEqual(fa.flattenArray([1, 2, 3, [1, 2, 3]]), [1, 2, 3, 1, 2, 3])

    def test_array2(self):
        self.assertEqual(fa.flattenArray([1, 2, 3, [1, 2, [1, 2]]]), [1, 2, 3, 1, 2, 1, 2])

if __name__ == "__main__":
    unittest.main()