# Number String Anagram
Transform an anagram of a sequence of number words into a corresponding
sequence of numerals. For example:
```
    erhte => 3
    owtsxi => 26
    revoveoffizeine => 5501
```
Because the input string is an anagram of a sequence of number words, the
order of the numerals returned does not matter.

To run the tests (JavaScript only):
```
node testAnagram.js
```

## Note on Efficiency

This algorithm is not the most efficient. Its time complexity is O(nm), where
n is the length of the input string and m is the number of number words in
the string.

One simple way to speed it up would be not repeatedly cut the input string to
remove the number word, but simply replace letters in the number word with a
letter not found in any numeral (such as 'k'), and just skip over occurrences of
that letter when searching the string. In this way, the result of removing
'zero' from 'revoveoffizeine' would be 'kkvkveoffikeine', and the result of
removing 'five' from that string would be 'kkkkvkokfkkeine'.

Another speedup would be to create a dictionary representation of the input
string itself, with each letter mapping to the number of its occurrences in the
string. Thus, we wouldn't have to cut the string at all, but simply decrement
counts for each letter found.

Neither of these speedups meaningfully affect the algorithm's time complexity,
but do they helpfully prune unnecessary operations.
