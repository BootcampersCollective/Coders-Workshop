#!/usr/local/bin/python3
'''
Transforms an anagram of a sequence of number words to a corresponding sequence
of numerals. For example:

    erhte => 3
    owtsxi => 26
    revoveoffizeine => 5501

Because the input string is an anagram of a sequence of number words, the order
of the numerals returned does not matter.

This algorithm is not the most efficient. Its time complexity is O(nm), where n
is the length of the input string and m is the number of number words in the
string. Here is one simple way to speed it up: instead of repeatedly splicing
the anagram string to remove the number word, we could replace letters in the
number word with a letter not found in any numeral (such as 'k'), and just skip
over occurrences of that letter when searching the string. In this way, the
result of removing 'zero' from 'revoveoffizeine' would be 'kkvkveoffikeine', and
the result of removing 'five' from that string would be 'kkkkvkokfkkeine'.
'''
import sys

# A mapping of number words to numerals.
number_map = {
    'zero': '0',
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9'
}

# These letters occur only once in the numerals.
first = {
    'z': 'zero',
    'w': 'two',
    'u': 'four',
    'x': 'six',
    'g': 'eight'
}
        
# These letters occur only once in the numerals not included above.
second = {
    'o': 'one',
    'h': 'three',
    'f': 'five',
    's': 'seven'
}

# These letters occur only once in the numerals not included above.
third = {
    'i': 'nine'
}


# Remove a letter from a string.
def cut(word, c):
    i = word.index(c)
    return word[:i] + word[(i+1):]

# Remove a number word from a string.
def remove_num(word, num):
    for i in num:
        word = cut(word, i)
    return word

'''
Returns the result of removing an occurrence of a number word from the
anagram, along with the number word removed. If none of the number words in
the map are in the anagram, the original anagram and null are returned.
'''
def split_number_word(anagram, word_map):
    result = anagram
    num = ''
    for i in anagram:
        if i in word_map:
            num = word_map[i]
            result = remove_num(anagram, num)
            break
    return result, num

'''
The algorithm works as follows. Try to find number words from the first map
in the anagram, and keep removing those words from the anagram until none are
left. Repeat the process with the second and third maps.

Number words found are added to an array as they are found.
'''
if __name__ == '__main__':
    words = []
    anagram = sys.argv[1]
    for map in [first, second, third]:
        result = ''
        while anagram != result:
            result, num = split_number_word(anagram, map)
            if num != '':
                words.append(number_map[num])
                anagram = result
                result = ''
    print(''.join(words))
