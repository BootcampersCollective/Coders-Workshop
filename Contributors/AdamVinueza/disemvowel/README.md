# Disemvowel

Replace a string with the result of replacing each vowel (aeiou) with the empty
string.

There is a Python implementation (Python 3 only) and a JavaScript implementation
(runnable in Node). The basic algorithm is to rebuild the string character by
character excluding any member of the set of (10 case-sensitive) vowels.

## Python

The Python version uses list comprehension, because there is [strong
evidence](https://waymoot.org/home/python_string/) that it is the most efficient
method.

To run the Python tests, you'll need the
[hypothesis](https://github.com/HypothesisWorks/hypothesis/tree/master/hypothesis-python)
package as well as [pytest](https://pypi.org/project/pytest/):

```
pip3 install hypothesis pytest
```

When those are installed, you can do this to run the tests (from the directory
containing the scripts):

```
pytest
```

You might find the property-test strategy interesting: it randomly generates
test cases.


## JavaScript

The JavaScript version uses the Set class, and a primitive home-rolled test
harness, but the basic algorithm is the same.
