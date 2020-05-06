# Disemvowel

Replace a string with the result of replacing each vowel (aeiou) with the empty
string.

This is a Python implementation (Python 3 only). The basic algorithm is to
rebuild the string character by character excluding any member of the set of (10
case-sensitive) vowels. It uses list comprehension, because there is [strong
evidence](https://waymoot.org/home/python_string/) that it is the most efficient
method.

To run the tests, you'll need the
[hypothesis](https://github.com/HypothesisWorks/hypothesis/tree/master/hypothesis-python)
package as well as [pytest](https://pypi.org/project/pytest/):

```
pip3 install hypothesis pytest
```

You might find the property-test strategy interesting: it randomly generates
test cases.
