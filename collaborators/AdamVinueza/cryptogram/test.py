import json

class Test:
    __slots__ = 'name', 'word_set', 'target', 'longest_word', 'verbose', 'actual'

    def __init__(self, json_object):
        self.name = json_object['name']
        self.word_set = json_object['word_set']
        self.target = json_object['target']
        self.longest_word = json_object['longest_word']
        self.verbose = json_object['verbose']
        self.actual = None

    def __str__(self):
        return '{0}:\n\
    word_set=[{1}]\n\
    target={2}\n\
    longest_word={3}\n\
    actual={4}'.format(
            self.name,
            ','.join([self._get_quoted(w) for w in self.word_set]),
            self._get_quoted(self.target),
            self._get_quoted(self.longest_word),
            self._get_quoted(self.actual))

    def _get_quoted(self, s):
        return s if s is None else "'{0}'".format(s)

    def run(self, subseq_func):
        self.actual = subseq_func(self.target, self.word_set)
        try:
            assert self.longest_word == self.actual,\
                '{0} failure: expected={0}, actual={1}'.format(
                    self.name, self.longest_word, self.actual)
        except AssertionError as ae:
            print(ae)
