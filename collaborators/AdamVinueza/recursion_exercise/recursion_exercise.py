'''
a collection of recursive functions for getting the length of a list.
'''

def tail(lst):
    return lst[1:]

def get_length(lst):
    return 1 + get_length(tail(lst)) if lst else 0

def get_length_optimized(lst):
    return get_length_tail(lst, 0)

def get_length_tail(lst, accum):
    return get_length_tail(tail(lst), accum + 1) if lst else accum
