#!/usr/local/bin/python3
import argparse
import math

'''
In general, expect to take away half the coins with every flip. But if n is
odd, we can't take away precisely half the coins, so leave the ceiling of the
result: e.g., if we toss 25 coins, expect to take away 12 instead of 13 coins.

If n is even, the ceiling of the result of dividing n by 2 is just n/2; so
always take the ceiling.

(The ceiling of a number n = the smallest integer >= n.)
'''

def expected_flips_tail(n, accum):
    '''Counts expected flips using tail recursion.'''
    return expected_flips_tail(math.ceil(n/2), accum + 1) if n > 1 else accum

def expected_flips_with_bit_shift(n, accum):
    '''
    We can use bit shifting here instead of division if we add 1 to the
    shifted number if the number being shifted is odd. This is equivalent to
    taking the mathematical ceiling of dividing by 2 instead of the floor.
    '''
    if n > 1:
        shifted = n >> 1
        next_number = 1 + shifted if n & 1 else shifted
        return expected_flips_with_bit_shift(next_number, accum + 1)
    else:
        return accum

def expected_flips(n):
    '''Counts expected flips.'''
    return expected_flips_tail(n, 0)

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('number_of_coins', help='number of coins at start')
    args = parser.parse_args()
    if not args.number_of_coins:
        parser.error()
    number_of_coins = int(args.number_of_coins)
    print('Expected number of flips until one coin is left: {0}'.format(
        expected_flips(number_of_coins)))
