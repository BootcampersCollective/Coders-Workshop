# Recursion Exercise

There are solutions in Python and JavaScript. The JavaScript file runs in 
NodeJS, while the Python should be run against Python 3.

Each solution comes with a simple test script. They should run in any
standard \*nix shell.

(If you're running Windows, you'll have to figure out how to run it using the
Command Prompt or Powershell, or else install Cygwin or set up the Windows
Subsystem for Linux and run it there.)

For Python, use this command:
```
./run_tests.py
```
For NodeJS, use this command:
```
./runTests.js
```

FYI: my general rule for test programs is that they should have no output
unless something has gone wrong, or unless you explicitly tell the program to
tell you stuff on the command line. (That's what flags like '-v' are for.)

## Notes on the functions

Two useful things to know about how these functions were written:

### Use of idiomatic resources in the language

Python has a ternary if-then-else construction that allows you to put all the
conditions on a single line:
```python
conditional_result if condition else alternative_result
```
JavaScript has a C-style ternary operator:
```javascript
condition ? conditional_result : alternative_result
```
Like all idioms, these have their place. If the logic is concise, it's often
more readable to put everything on a single line, so the logic can be read
directly off the line, from left to right, as in this Fibonacci function:
```python
def fib(n):
    return n if n < 2 else fib(n - 1) + fib(n - 2)
```

### Use of helper functions to encapsulate distinct logic

Working with collections recursively as a rule makes extensive use of a
fundamental concept of functional programming: splitting a list into `head`
and `tail` components. The `head` of a list is just the first member, while
its `tail` is the rest of the list. In Python, we can define `tail` using its
slice operator:
```python
def tail(lst):
    return lst[1:]
```
In JavaScript, we can use the `Array.slice` function:
```javascript
const tail = arr => { arr.slice(1); };
```
If we want more idiomatic JavaScript, we can use the built-in
array-construction idioms from ES6:
```javascript
const tail = ([, ...t]) => t;
```
Why define a `tail` function, instead of just calling the slicing functions
directly? So as to avoid duplicating function logic. This helps prevent bugs,
makes code maintenance easier, and allows us to reuse `tail` elsewhere.

### Wrapping functions to hide complexity

The exercise demands a recursive function, `getLength`. But there are more and
less efficient ways of implementing recursion. The most efficient variant uses
what's known as _tail recursion_, which is trivially transformable into
iteration via a loop. Unfortunately, tail recursion generally involves an
extra function parameter that carries state from one recursive call to the
next. This inevitably makes the function harder to understand. But it's easy
to hide this additional complexity by wrapping the tail-recursive function
in another function that makes the tail-recursive call with the appropriate
initial state for the function. That way, instead of writing
```
const length = getLengthTail(arr, 0);
```
which has the potentially confusing "accumulator" parameter `0`, we can write
```
const length = getLength(arr);
```
and define `getLength` as a call to `getLengthTail`, passing in its own array
parameter as well as `0`.
