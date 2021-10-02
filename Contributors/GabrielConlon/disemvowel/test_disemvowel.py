import unittest
import disemvowel as dv

class TestMethods(unittest.TestCase):
    # single word
    def test_singleWord(self):
        self.assertEqual(dv.removeVowels("test"), "tst")

    # sentence
    def test_sentence(self):
        self.assertEqual(dv.removeVowels("the world is round"), "th wrld s rnd")

    # all capital word
    def test_capitalWord(self):
        self.assertEqual(dv.removeVowels("TEST"), "TST")

    # mixed case sentence
    def test_mixedCase(self):
        self.assertEqual(dv.removeVowels("Hello darKNEss my OLD friend"), "Hll drKNss m LD frnd")
        # check for failure if cases don't match
        self.assertNotEqual(dv.removeVowels("Hello World"), "hll wrld")
        self.assertEqual(dv.removeVowels("Hello World"), "Hll Wrld")

    # all vowels
    def test_allVowels(self):
        self.assertEqual(dv.removeVowels("AAAAAaaaaa"), "")

    # no vowels
    def test_noVowels(self):
        self.assertEqual(dv.removeVowels("HHHHH"), "HHHHH")

if __name__ == "__main__":
    unittest.main()