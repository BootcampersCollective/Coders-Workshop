#!/usr/bin/env python3

def check_permutation(str1, str2):
    # include case-sensitive, whitespace, and UTF-8 encoding
    # decode('UTF-8')

    str1_charCount = {x: str1.count(x) for x in set(str1)}
    str2_charCount = {x: str2.count(x) for x in set(str2)}

    # check str1==str2 for length and character count (i.e. abort if strings are 'abled' and 'aisle')
    # if all character counts are equal, you have a matching string
    if str1_charCount != str2_charCount:
        return False
    else:
        return True

def main():
    print(check_permutation("god", "dog"))  # True
    print(check_permutation("hello", "goodbye"))  # False
    print(check_permutation("hello world", "goodbye world")) # False
    print(check_permutation("hello world", "lll ooehrwd")) # False

if __name__ == "__main__":
    main()