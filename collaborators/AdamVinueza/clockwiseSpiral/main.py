#!/usr/local/bin/python3
from roomba import Roomba
from argparse import ArgumentParser

def build_matrix(rows, cols):
    matrix = []
    counter = 1
    for i in range(rows):
        row = []
        matrix.append(row)
        for j in range(cols):
            row.append(counter)
            counter += 1
    return matrix

if __name__ == '__main__':
    parser = ArgumentParser()
    parser.add_argument('rows', help='number of rows in the input matrix')
    parser.add_argument('columns', help='number of columns in the input matrix')
    args = parser.parse_args()
    try:
        rows = int(args.rows)
        cols = int(args.columns)
    except ValueError:
        parser.error('rows and columns must be integers')
    if rows < 1 or cols < 1:
        parser.error('rows and columns must be positive integers')
    matrix = build_matrix(rows, cols)
    r = Roomba(matrix)
    r.start()
