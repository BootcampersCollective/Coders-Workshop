#!/usr/bin/env python3

"""
Instructions
Take an array with possible nested arrays, return a 'flattened' version of that array

For example, with input [1, 2, 3, [1, 2, 3]],
return [1, 2, 3, 1, 2, 3].

With input [1, 2, 3, [1, 2, [1, 2]]],
return [1, 2, 3, 1, 2, 1, 2].
"""

def flattenArray(arr, flatArray):
    # recursively check each item in the array for type
    # if type == [], flatten
    for idx, item in enumerate(arr):
        if type(item) == list:
            flattenArray(item, flatArray)
        else:
            flatArray.append(item)
    return flatArray

def main():
    test_array = [1, 2, 3, [1, 2, [1, 2]]]
    flatArray = []
    print(test_array, flattenArray(test_array, flatArray))

if __name__ == "__main__":
    main()