#!/usr/local/bin/python3
from roomba import Roomba

if __name__ == '__main__':
    matrix = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]]
    r = Roomba(matrix)
    r.start()

'''
1  2  3  4
5  6  7  8
9 10 11 12

1 2 3 4 8 12 11 10 9 5 6 7
'''
