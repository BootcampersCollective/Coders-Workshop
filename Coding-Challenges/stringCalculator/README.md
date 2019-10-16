# String Calculator

Roy Osherove's TDD Kata 1: [String Calculator](https://osherove.com/tdd-kata-1)

## Before you start: 

* Try not to read ahead.
* Do one task at a time. The trick is to learn to work incrementally.
* Make sure you only test for correct inputs. There is no need to test for invalid inputs for this kata

## Tasks

### 1

Create a simple String calculator with a method signature:

`add(numbers: str) -> int`

The method can take up to two numbers, separated by commas, and will return their sum. For example `""` or `"1"` or `"1,2"` as inputs. (For an empty string, it will return `0`.) 

#### Hints

* Start with the simplest test case of an empty string and move to one and two numbers.
* Remember to solve things as simply as possible so that you force yourself to write tests you did not think about.
* Remember to refactor after each passing test.

### 2

Allow the `add` method to handle an unknown amount of numbers.

### 3

Allow the `add` method to handle new lines between numbers (instead of commas).

* The following input is OK: `"1\n2,3"` (will equal 6)
* The following input is NOT OK: `"1,\n"` (no need to prove it - just clarifying)

### 4

Support different delimiters.

To change a delimiter, the beginning of the string will contain a separate line that looks like this: `"//[delimiter]\n[numbers…]"` for example `"//;\n1;2"` should return three where the default delimiter is `';'`. The first line is optional. All existing scenarios should still be supported

### 5

Calling `add` with a negative number will throw an exception "negatives not allowed" and all negative numbers that were passed. If there are multiple negatives, show all of them in the exception message.

---

**_STOP HERE if you are a beginner. Continue if you can finish the steps so far in less than 30 minutes._**

---

### 6

Numbers bigger than 1000 should be ignored, so adding `2 + 1001 = 2`.

### 7

Delimiters can be of any length with the following format: `"//[delimiter]\n"`. For example: `"//[***]\n1***2***3"` should return `6`.

### 8

Allow multiple delimiters, like this: `"//[delim1][delim2]\n"`. For example `"//[*][%]\n1*2%3"` should return `6`.

### 9

Make sure you can also handle multiple delimiters with length longer than one char.
