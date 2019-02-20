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
    parser.add_argument('startx', nargs='?', help='starting x-coordinate', default='0')
    parser.add_argument('starty', nargs='?', help='starting y-coordinate', default='0')
    parser.add_argument('-c', '--counter-clockwise', action='store_true', default=False)
    args = parser.parse_args()
    try:
        rows = int(args.rows)
        cols = int(args.columns)
    except ValueError:
        parser.error('rows, columns, and starting indices must be integers')
    start = 0, 0
    if args.startx and args.starty:
        start = (int(args.startx), int(args.starty))
    if rows < 1 or cols < 1:
        parser.error('rows and columns must be positive integers')
    matrix = build_matrix(rows, cols)
    r = Roomba(matrix, start, args.counter_clockwise)
    r.start()
