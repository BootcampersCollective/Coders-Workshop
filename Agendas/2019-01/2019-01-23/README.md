# Coders' Workshop: January 23, 2019

## Topic: Recursion

[Slides](https://slides.com/bbyunis/coder-s-workshop)

Show a solution not using recursion, then one with:

* `factorial`
* `max_rot`

## Challenges

### Challenge 1: Repeater

Write a function that takes an input character and returns that character repeated 5 times using recursion. For example, if the input is '**g**', then the output should be '**ggggg**'.

```javascript
console.log(typeof repeater); // 'function'
console.log(repeater("g")); // 'ggggg'
console.log(repeater("j")); // 'jjjjj'
```

[solve in JavaScript](https://repl.it/@andy_young/repeaterjs)

[solve in Python](https://repl.it/@andy_young/repeaterpy)

### Challenge 2: getLength

Get the length of an array using recursion without accessing its length property.

```javascript
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
console.log(getLength([undefined])); // -> 1
```

[solve in JavaScript](https://repl.it/@andy_young/getLengthjs)

[solve in Python](https://repl.it/@andy_young/getLengthpy)

### Challenge 3: Fibonacci

[Fibonacci Product](../../../Coding-Challenges/fibonacciProduct)

[See Codewars.com (JavaScript)](https://www.codewars.com/kata/product-of-consecutive-fib-numbers/javascript)

[See Codewars.com (Python)](https://www.codewars.com/kata/product-of-consecutive-fib-numbers/python)

### :feelsgood: Hard Mode: Rotate for a Max

[Max Rotation](../../../Coding-Challenges/maxRotation)

Hint: Try breaking this algorithm into more than one function.

## Resources

[Fib num wiki](http://en.wikipedia.org/wiki/Fibonacci_number)

[Visualize Python or JavaScript execution](http://www.pythontutor.com/visualize.html#mode=edit)

## Afterthoughts

### Andy's notes

We received good feedback. It seems most people were sufficiently challenged. I'm considering revisiting the problems faced and helping them achieve clarity. Perhaps moving forward with different challenges is ill conceived if fellow coders are still working through last session's problem set. If they're still fighting in that space, they have much to gain right where they are, before running to another topic. For next week I may focus on Functions & Execution Context. This is a smooth entry point (IMHO) for coders to develop their technical communication, which in turn supports better pseudo-coding, problem modeling and so forth.

### Supplemental

Adam V. suggested a code review process, which I :heart:. I think we can find a way to evaluate & critique one each other's work, perhaps capture it in a group repo and then build towards work-flow skills?
