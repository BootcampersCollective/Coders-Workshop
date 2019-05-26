#!/usr/local/bin/python3
import json
from node import Node
from matrix import Matrix
from direction import Direction

'''
A 4 x 5 matrix looks like this:

    1   2   3   4   5
    6   7   8   9  10
    11 12  13  14  15
    16 17  18  19  20

If we start at 1 and go clockwise, we'll hit every element. But if we start at
15 and go clockwise, we'll miss elements 12, 13, and 14.

A useful exercise would be to extend the algorithm to allow for turning in a
clockwise direction.

Another exercise: change direction randomly and see what happens.
'''
if __name__ == '__main__':
    with open('test.json') as reader:
        tests = json.load(reader)
    for test in tests:
        rows = test['rows']
        columns = test['columns']
        matrix = Matrix(rows, columns)
        [r, c] = test['start_position']
        d = Direction[test['start_direction']]
        actual = matrix.traverse(row=r, column=c, values=[], direction=d)
        if actual != test['expected']:
            print('Expected={0}, Actual={1}'.format(test['expected'], actual))
        else:
            print('PASS')
