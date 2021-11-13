import unittest
import nextBiggestInteger as nbi

class TestMethods(unittest.TestCase):
    # if integer = 6 (0110), returns 9 (1001)
    def test_six_equals_nine(self):
        self.assertEqual(nbi.nextBiggestInteger(6), 9)

    # 7 -> 11
    def test_seven_equals_eleven(self):
        self.assertEqual(nbi.nextBiggestInteger(7), 11)

    # 14 -> 19
    def test_fourteen_equals_nineteen(self):
        self.assertEqual(nbi.nextBiggestInteger(14), 19)

if __name__ == "__main__":
    unittest.main()
