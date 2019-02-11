#!/usr/bin/env python3
import cryptogram

test1 = {
    'word_set': [ 'apple', 'able', 'ale', 'bale', 'aple', 'kangaroo' ],
    'target': 'abppplee',
    'longest_word': 'apple'
}

def run_test(test):
    pass

test2 = {
    'word_set': [],
    'target': 'apple',
    'longest_word': None
}

if __name__ == '__main__':
    longest_word = cryptogram.get_longest_subsequence(target_word, word_set)
    print(longest_word if longest_word else 'No longest subsequence')
