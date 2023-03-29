# String to Binary

Create a function that takes a string as an argument.

The function must return a string containing 1s and 0s based on the string argument's words.

If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it.

The returned string's length should be a multiple of 8; if the string is not a multiple of 8, you should remove the numbers in excess.

Examples
textToNumberBinary("zero one zero one zero one zero one") ➞ "01010101"

textToNumberBinary("Zero one zero ONE zero one zero one") ➞ "01010101"

textToNumberBinary("zero one zero one zero one zero one one two") ➞ "01010101"

textToNumberBinary("zero one zero one zero one zero three") ➞ ""

textToNumberBinary("one one") ➞ ""
