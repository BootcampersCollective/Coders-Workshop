import autocomplete as ac
import unittest

class TestMethods(unittest.TestCase):
    def test_shortList(self):
        self.assertTrue(ac.autocomplete("de", ["dog", "deer", "deal"]), ["deer", "deal"])

    def test_listWithNotBeginning(self):
        self.assertTrue(ac.autocomplete("ed", ["educate", "edify", "opted"]), ["educate", "edify"])

    def test_longListWithDuplicates(self):
        choice = "gra"
        longList = ["green", "grape", "gargoyle", "deer", "educate", "gravel",\
                   "gray", "great", "apple", "banana", "granular", "gravel",\
                    "greatness", "zulu", "grate", "gravy", "grape"]
        answers = ["grape", "gravel", "gray", "granular", "gravel", "grate", "gravey", "grape"]
        self.assertTrue(ac.autocomplete(choice, longList), answers)

    def test_fullWordMatch(self):
        self.assertTrue(ac.autocomplete("black", ["blue", "black", "balloon"]), ["black"])

    def test_variableCase(self):
        self.assertTrue(ac.autocomplete("bLU", ["black", "blue", "BLUE", "bLUe", "bLUE", "BLue"]), ["bLUe", "bLUE"])

if __name__ == "__main__":
    unittest.main()
