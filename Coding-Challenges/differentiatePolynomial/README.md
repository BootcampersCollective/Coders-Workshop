# Differentiate Polynomial

Create a function that differentiates a polynomial for a given value of x.

Your function will receive 2 arguments: a polynomial as a string, and a point to evaluate the equation as an integer.

You may make the following assumptions:

* There will be a coefficient near each x, unless the coefficient equals 1 or -1.

* There will be an exponent near each x, unless the exponent equals 0 or 1.

* All exponents will be greater or equal to zero

For example, given `"12x+2", 3`, your function should return `12`, since the derivative of the function is the constant `y = 12`, which evaluated at `x = 3` equals 3

Given `"x^2-x", 3`, your function should return `5`, since the derivate is the function `y = 2x -1`, which evaluated at `x = 6` equals 5.

Given `"-5x^2+10x+4", 3`, your function should return `-20`, since the derivative is the function `y = -10x + 10`, which evaulated at `x = 3` equals -20
