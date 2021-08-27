# practicing with some unittesting

import check_permutation
import unittest


class TestMethods(unittest.TestCase):
    def test_baseline(self):
        self.assertTrue(check_permutation.check_permutation("god", "dog"))

    def test_lengthDiff(self):
        self.assertFalse(check_permutation.check_permutation("hello", "goodbye"))

    def test_withWhitespace(self):
        self.assertFalse(check_permutation.check_permutation("hello world", "goodbye world"))

    def test_complexWhitespaceTrue(self):
        self.assertTrue(check_permutation.check_permutation("hello world", "lll ooehrwd"))


if __name__ == 'main':
    unittest.main()
