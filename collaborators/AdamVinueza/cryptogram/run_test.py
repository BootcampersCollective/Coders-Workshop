#!/usr/bin/env python3
import cryptogram
import test
import sys
import json

def run_test(t):
    expected = t.longest_word
    actual = cryptogram.get_longest_subsequence(
        t.target,
        t.word_set)
    if t.verbose:
        print('test={0}:'.format(
            get_quoted(t.name)))
        print('\tword_set=[{0}]'.format(','.join(
            [get_quoted(w) for w in t.word_set])))
        print('\ttarget={0}'.format(
            get_quoted(t.target)))
        print('\tlongest_word={0}'.format(
            get_quoted(t.longest_word)))
        print('\ttestresult={0}'.format(
            get_quoted(actual)))
    assert expected == actual, '{0}: Expected={1}, Actual={2}'.format(
        t.name,
        expected,
        actual)

def get_quoted(s):
    return s if s is None else "'{0}'".format(s)

if __name__ == '__main__':
    verbose = False
    if len(sys.argv) == 2:
        verbose = sys.argv[1] == '-v'
    try:
        with open('tests.json') as reader:
            tests = [ test.Test(**json.loads(line)) for line in reader ]
        for t in tests:
            t = t._replace(verbose=verbose)
            run_test(t)
    except AssertionError as ae:
        print(ae)
