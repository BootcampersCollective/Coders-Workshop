#!/usr/local/bin/python3
import sys

def collatz(n):
    return True if n == 1 else collatz(n / 2 if n % 2 == 0 else 3 * n + 1)

def collatz_trace(n, max_seq = 1):
    if n == 1:
        return max_seq
    else:
        return collatz_trace(n / 2 if n % 2 == 0 else 3 * n + 1, max_seq + 1)

def max_collatz_trace(n):
    max_seq = 0
    idx = 1
    for i in range(1, n + 1):
        count = collatz_trace(i)
        if count > max_seq:
            max_seq = count
            idx = i
    return (max_seq, idx)

if __name__ == '__main__':
    n = int(sys.argv[1])
    print("max sequence length: {0}, value: {1}".format(*max_collatz_trace(n)))
