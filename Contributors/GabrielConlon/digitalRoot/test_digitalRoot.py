import unittest
import digitalRoot as dr

class TestMethods(unittest.TestCase):
    # 1 = 1
    def test_singleDigit(self):
        self.assertTrue(dr.digitalRoot(1), 1)

    # 16 --> 1 + 6 = 7
    def test_short(self):
        self.assertTrue(dr.digitalRoot(16), 7)

    # 942 --> 9 + 4 + 2 = 15 --> 1 + 5 = 6
    def test_mediumLength(self):
        self.assertTrue(dr.digitalRoot(942), 6)

    # 132189 --> 1 + 3 + 2 + 1 + 8 + 9 = 24 --> 2 + 4 = 6
    def test_longLength(self):
        self.assertTrue(dr.digitalRoot(132189), 6)

    #493193 --> 4 + 9 + 3 + 1 + 9 + 3 = 29 --> 2 + 9 = 11 --> 1 + 1 = 2

    def test_float(self):
        self.assertIsNone(dr.digitalRoot(7.2))

    def test_string(self):
        self.assertIsNone(dr.digitalRoot("helloworld"))


if __name__ == "__main__":
    unittest.main()