#!/usr/local/bin/python3
'''
A fixed point in a list of non-negative integers is an integer whose value is
identical to its 0-based location in the list. This program prints the list of
fixed points found. If the list has no fixed points, the empty list is printed.

If the list is sorted, you can use binary search instead of iterating through
the array. (Binary search is O(log n).) This algorithm does not presume that the
list is sorted, so it's O(n). The downside to using binary search is that
finding all the fixed points is in the worst case no better than O(n) anyway;
it'd just be O(log n) if you wanted to find a single fixed point.
'''

import sys

# Returns the list of fixed points found in a list.
def find_fixed_points(lst):
    '''
    This "list comprehension", and here it is equivalent to:

        fixed_points = []
        count = len(lst)
        for i in range(count):
            if lst[i] == i:
                fixed_points.append(i)
    '''
    return [ lst[i] for i in range(len(lst)) if lst[i] == i]

if __name__ == '__main__':
    nums = [ int(arg) for arg in sys.argv[1:] ]
    print(find_fixed_points(nums))
