#!/usr/local/bin/python3
import json
from node import Node
from matrix import Matrix
from direction import Direction

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
