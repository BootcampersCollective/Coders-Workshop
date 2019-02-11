#!/usr/bin/env python3
import cryptogram

if __name__ == '__main__':
    word_set = [ 'apple', 'able', 'ale', 'bale', 'aple', 'kangaroo' ]
    target_word = 'abppplee'
    longest_word = cryptogram.get_longest_subsequence(target_word, word_set)
    print(longest_word if longest_word else 'No longest subsequence')
