#!/usr/bin/python

import recursion_exercise
import sys

def get_list_of_size(size):
    return list(range(size))

def main():
    '''
    Just gets the lengths of increasingly large lists of numbers. It shouldn't
    matter what's in the lists, because get_length doesn't ever look inside
    the list, but if you want to test that, feel free.

    Because we're testing a recursive function, we'll have to keep an eye on
    the depth of the call stack.
    '''
    sys.setrecursionlimit(2000) # Python's default limit is 1000
    empty = []
    for expected in range(1000):
        lst = get_list_of_size(expected)
        actual = recursion_exercise.get_length(lst)
        if (expected != actual):
            print('Error: expected {0}, actual {1}'.format(expected, actual))

if __name__ == '__main__':
    main()
