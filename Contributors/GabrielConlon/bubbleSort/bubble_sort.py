#!/usr/bin/env python3

def bubble_sort(lst):
    # Iterate over array elements
    # range() default start is 0
    for i in range(len(lst)):
        # from 0 index, iterate to end of array less 1
        for j in range(0, len(lst)-i-1):
            # compare elements, move left if less than
            if lst[j] > lst[j+1]:
                    lst[j], lst[j+1] = lst[j+1], lst[j]
    return lst


print(bubble_sort([5, 2, 4, 3, 1]))  # [1, 2, 3, 4, 5]