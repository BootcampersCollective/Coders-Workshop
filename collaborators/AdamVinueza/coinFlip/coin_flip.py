#!/usr/local/bin/python3
import sys
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
    

def expected_flips(n):
    '''Counts expected flips.'''
    return expected_flips_tail(n, 0)

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('usage: coin_flip [number_of_coins]')
        exit(1)
    number_of_coins = int(sys.argv[1])
    print('Expected number of flips until one coin is left: {0}'.format(
        expected_flips(number_of_coins)))
