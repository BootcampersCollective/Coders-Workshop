from functools import reduce


def multiply_all_not_me(items):
    return [reduce(lambda a, b: a*b, set(items) - set([x]), 1) for x in items]
