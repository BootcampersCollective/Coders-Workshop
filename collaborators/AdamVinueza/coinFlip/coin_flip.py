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

def _expected_flips_tail(n, accum):
    '''Counts expected flips using tail recursion.'''
    return _expected_flips_tail(math.ceil(n/2), accum + 1) if n > 1 else accum

def _expected_flips_with_bit_shift(n, accum):
    '''
    We can use bit shifting here instead of division if we add 1 to the
    shifted number if the number being shifted is odd. This is equivalent to
    taking the mathematical ceiling of dividing by 2 instead of the floor.
    '''
    if n > 1:
        shifted = n >> 1
        next_number = 1 + shifted if n & 1 else shifted
        return _expected_flips_with_bit_shift(next_number, accum + 1)
    else:
        return accum

def expected_flips(n):
    '''Counts expected flips.'''
    return 1 + expected_flips(math.ceil(n/2)) if n > 1 else 0

def expected_flips_bit_shifted(n):
    return _expected_flips_with_bit_shift(n, 0)

def expected_flips_optimized(n):
    return _expected_flips_tail(n, 0)

if __name__ == '__main__':
    coin_flippers = {
        'tail_optimized': expected_flips_optimized,
        'bit_shifted': expected_flips_bit_shifted,
        'standard': expected_flips
    }
    parser = argparse.ArgumentParser()
    parser.add_argument('number_of_coins', help='number of coins at start')
    parser.add_argument('-a', '--algorithm', help='expectation algorithm',
        default='tail_optimized')
    args = parser.parse_args()
    number_of_coins = int(args.number_of_coins)
    func = coin_flippers[args.algorithm] if args.algorithm else expected_flips
    print('Expected number of flips until one coin is left: {0}'.format(
        func(number_of_coins)))
