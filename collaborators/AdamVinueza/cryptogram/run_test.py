#!/usr/local/bin/python3

import cryptogram
from test import Test
import sys
import json
import argparse

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('-v', '--verbose', action='store_true',
        help='Verbose output')
    parser.add_argument('file', type=argparse.FileType('r'),
        help='File holding test data')
    args = parser.parse_args()
    if not args.file:
        parser.error('path to test file is required')
    json_tests = json.load(args.file)
    args.file.close()
    for json_test in json_tests:
        test = Test(json_test)
        test.run(cryptogram.get_longest_subsequence)
        if args.verbose:
            print(test)
